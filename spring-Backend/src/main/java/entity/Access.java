package entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
//entity for access to custom access levels
@Entity
@Table(name="access")
public class Access {

	@Id
	@Column(name="access_levels")
	private String accessLevels;

	public Access(){}
	
	public String getAccessLevels() {
		return accessLevels;
	}

	public void setAccessLevels(String accessLevels) {
		this.accessLevels = accessLevels;
	}
}
