package repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import entity.Asset;
import entity.Users;

@Repository
public interface AssetRepository extends JpaRepository<Asset, String>{

	@Query("select s from Asset s where s.type = :type")
	public List<Asset>  getAssetByType();
	
	@Query("select s from Asset s where s.assignedUser = :email")
	public List<Asset>  getAssetByEmail(@Param("email")String email);
	
	@Query("select s from Asset s where s.location = :location")
	public List<Asset>  getAssetByLocation();
	
	@Query("select s from Asset s where s.assetNum = :assetNum")
	public Asset getAssetById(@Param("assetNum") int assetNum);
	
	@Transactional
	@Modifying
	@Query("update Asset u set u.manufacturer = :manufacturer, u.modelNum = :modelNum, u.styleCode = :styleCode, u.serialNum = :serialNum, u.datePurchased = :datePurchased, u.location = :location, u.name = :name, u.type = :type, u.dateLastServiced = :dateLastServiced, u.dateNextService = :dateNextService, u.version = :version, u.assignedUser = :assignedUser, u.notes = :notes where u.assetNum = :assetNum")
	public void submitAssetUpdateDetails(@Param("assetNum") int assetNum, @Param("manufacturer") String manufacturer, @Param("modelNum") String modelNum, 
			@Param("styleCode") String styleCode, @Param("serialNum") String serialNum, @Param("datePurchased") String datePurchased, @Param("location") String location, 
			@Param("name") String name, @Param("type") String type, @Param("dateLastServiced") String dateLastServiced, @Param("dateNextService") String dateNextService, 
			@Param("version") String version, @Param("assignedUser") String assignedUser, @Param("notes") String notes);
}