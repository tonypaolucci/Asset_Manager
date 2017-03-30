package repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import entity.Access;

@Repository
public interface AccessRepository extends JpaRepository<Access, String>{

}
