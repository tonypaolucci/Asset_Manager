package entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
//defines the asset table
@Entity
@Table(name="asset")
public class Asset {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="asset_num")
	int assetNum;
	@Column(name="manufacturer")
	String manufacturer;
	@Column(name="model_num")
	String modelNum;
	@Column(name="style_code")
	String styleCode;
	@Column(name="serial_num")
	String serialNum;
	@Column(name="date_purchased")
	String datePurchased;
	@Column(name="location")
	String location;
	@Column(name="name")
	String name;
	@Column(name="type")
	String type;
	@Column(name="date_last_serviced")
	String dateLastServiced;
	@Column(name="date_next_service")
	String dateNextService;
	@Column(name="version")
	String version;
	@Column(name="notes")
	String notes;
	@Column(name="assigned_user")
	String assignedUser;
	
	public Asset(){}
	//getters and setters
	public String getAssignedUser() {
		return assignedUser;
	}

	public void setAssignedUser(String assignedUser) {
		this.assignedUser = assignedUser;
	}

	public int getAssetNum() {
		return assetNum;
	}
	public void setAssetNum(int assetNum) {
		this.assetNum = assetNum;
	}
	public String getManufacturer() {
		return manufacturer;
	}
	public void setManufacturer(String manufacturer) {
		this.manufacturer = manufacturer;
	}
	public String getModelNum() {
		return modelNum;
	}
	public void setModelNum(String modelNum) {
		this.modelNum = modelNum;
	}
	public String getStyleCode() {
		return styleCode;
	}
	public void setStyleCode(String styleCode) {
		this.styleCode = styleCode;
	}
	public String getSerialNum() {
		return serialNum;
	}
	public void setSerialNum(String serialNum) {
		this.serialNum = serialNum;
	}
	public String getDatePurchased() {
		return datePurchased;
	}
	public void setDatePurchased(String datePurchased) {
		this.datePurchased = datePurchased;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getDateLastServiced() {
		return dateLastServiced;
	}
	public void setDateLastServiced(String dateLastServiced) {
		this.dateLastServiced = dateLastServiced;
	}
	public String getDateNextService() {
		return dateNextService;
	}
	public void setDateNextService(String dateNextService) {
		this.dateNextService = dateNextService;
	}
	public String getVersion() {
		return version;
	}
	public void setVersion(String version) {
		this.version = version;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}
	
}
