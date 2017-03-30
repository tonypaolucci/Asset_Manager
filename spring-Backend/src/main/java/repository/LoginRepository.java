package repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import entity.Login;
import entity.Users;

@Repository
public interface LoginRepository extends JpaRepository<Login, String>{

	@Query("select s from Login s where s.userName = :userName and s.pass = :pass")
	public List<Login> checkLogin(@Param("userName")String userName, @Param("pass")String pass);
	
	@Query("select s from Login s where s.userName = :userName")
	public List<Login> checkUserName(String userName);
	

}
