package repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

import entity.Users;

@Repository
public interface UsersRepository extends JpaRepository<Users, String>{
	
	@Query("select s from Users s where s.userName = :userName and s.pass = :pass")
	public Users login(@Param("userName")String userName, @Param("pass")String pass);
	
	@Query("select s from Users s where s.email = :email")
	public Users getUserByEmail(@Param("email") String email);
	
	@Transactional
	@Modifying
	@Query("update Users u set u.firstName = :firstName, u.lastName = :lastName, u.accessLevel = :accessLevel where u.email = :email")
	public void submitUserUpdateDetails(@Param("firstName") String firstName, @Param("lastName") String lastName, @Param("accessLevel") String accessLevel, @Param("email") String email);

	
}
