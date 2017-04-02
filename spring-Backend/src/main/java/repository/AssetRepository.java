package repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import entity.Asset;

@Repository
public interface AssetRepository extends JpaRepository<Asset, String>{

	@Query("select s from Asset s where s.type = :type")
	public List<Asset>  getAssetByType();
	
	@Query("select s from Asset s where s.assignedUser = :email")
	public List<Asset>  getAssetByEmail(@Param("email")String email);
	
	@Query("select s from Asset s where s.location = :location")
	public List<Asset>  getAssetByLocation();
}
