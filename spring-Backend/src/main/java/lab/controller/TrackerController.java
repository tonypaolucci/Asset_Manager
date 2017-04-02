package lab.controller;

import java.util.List;

import org.omg.PortableInterceptor.SUCCESSFUL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import entity.Access;
import entity.Asset;
import entity.Login;
import entity.Users;
import repository.AccessRepository;
import repository.AssetRepository;
import repository.LoginRepository;
import repository.UsersRepository;

@CrossOrigin(origins="*")
@RestController
public class TrackerController {

	@Autowired
	private UsersRepository usersRepository;
	@Autowired
	private LoginRepository loginRepository;
	@Autowired
	private AccessRepository accessRepository;
	@Autowired
	private AssetRepository assetRepository;
	
	@RequestMapping(value="/users", 
			consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE,
			method= RequestMethod.POST)
	public void submitUsersDetails(@RequestBody Users users)
	{
		usersRepository.save(users);
	}
	@RequestMapping(value="/login", 
			consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE,
			method= RequestMethod.POST)
	public void submitLoginDetails(@RequestBody Login login)
	{
		loginRepository.save(login);
	}
	@RequestMapping(value="/login", 
			produces = MediaType.APPLICATION_JSON_VALUE,
			method= RequestMethod.GET)
	public ResponseEntity<?> login(String userName, String pass)
	{
		Users user = usersRepository.login(userName, pass);
		
		System.out.println(loginRepository.exists(userName));
		if(user == null)
		{
			System.out.println(loginRepository.exists(userName));
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
		else
		{
			System.out.println(loginRepository.exists(userName));
			return new ResponseEntity<>(user,HttpStatus.OK);
		}
		//.checkLogin(userName, pass)	;
		
	}
//	@RequestMapping(value="/login", 
//			produces = MediaType.APPLICATION_JSON_VALUE,
//			method= RequestMethod.GET)
//	public void checkUserName(String userName)
//	{
//		loginRepository.checkUserName(userName)	;
//	}
	@RequestMapping(value="/access", 
			consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE,
			method= RequestMethod.POST)
	public void submitAccessDetails(@RequestBody Access access)
	{
		accessRepository.save(access);
	}
	@RequestMapping(value="/asset", 
			consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE,
			method= RequestMethod.POST)
	public void submitAssetDetails(@RequestBody Asset asset)
	{
		assetRepository.save(asset);
	}
	@RequestMapping(value="/asset", 
			 produces = MediaType.APPLICATION_JSON_VALUE,
			method= RequestMethod.GET)
	public List<Asset> getAssetsByType(@RequestBody String type)
	{
		return null;
		//assetRepository;
	}
	@RequestMapping(value="/assigned_asset", 
			 produces = MediaType.APPLICATION_JSON_VALUE,
			method= RequestMethod.GET)
	public List<Asset> getAssetsByEmail(@RequestBody String email)
	{
		return assetRepository.getAssetByEmail(email);
		//assetRepository;
	}
}
