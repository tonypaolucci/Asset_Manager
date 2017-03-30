package repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import entity.Asset;

@Repository
public interface AssetRepository extends JpaRepository<Asset, String>{

	@Query("select s from Asset s where s.type = :firstName")
	List<Asset>  getAssetByType();
	
}
