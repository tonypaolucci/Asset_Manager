package repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import entity.Users;

@Repository
public interface UsersRepository extends JpaRepository<Users, String>{
	
	@Query("select s from Users s where s.userName = :userName and s.pass = :pass")
	public Users login(@Param("userName")String userName, @Param("pass")String pass);

}
