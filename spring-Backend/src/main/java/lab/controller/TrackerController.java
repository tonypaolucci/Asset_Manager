package lab.controller;

import java.util.List;

import org.omg.PortableInterceptor.SUCCESSFUL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
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
	
	//user registration
	@RequestMapping(value="/users", 
			consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE,
			method= RequestMethod.POST)
	public void submitUsersDetails(@RequestBody Users users)
	{
		SendMail email = new SendMail();
		usersRepository.save(users);
		email.sendMails(users.getEmail(), "Welcome/!", "Thanks for registering with Asset Manager/!");
	}
	//user info retrieval
	@RequestMapping(value="/user", 
			produces = MediaType.APPLICATION_JSON_VALUE,
			method= RequestMethod.GET)
	public Users getUserByEmail(String email)
	{
		return usersRepository.getUserByEmail(email);
	}
	//saves updated user information
	@Transactional
	@RequestMapping(value="/user/id", 
			consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE,
			method= RequestMethod.POST)
	public void submitUserUpdateDetails(@RequestBody Users user)
	{
		
		usersRepository.submitUserUpdateDetails(user.getFirstName(), user.getLastName(), user.getAccessLevel(), user.getEmail());
	}
	
	@RequestMapping(value="/login", 
			consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE,
			method= RequestMethod.POST)
	public void submitLoginDetails(@RequestBody Login login)
	{
		loginRepository.save(login);
	}
	
	//logic for logging in
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
		
	}
	//asves to the access level table
	@RequestMapping(value="/access", 
			consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE,
			method= RequestMethod.POST)
	public void submitAccessDetails(@RequestBody Access access)
	{
		accessRepository.save(access);
	}
	
	//saves new equipment and send email confirmation
	@RequestMapping(value="/asset", 
			consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE,
			method= RequestMethod.POST)
	public void submitAssetDetails(@RequestBody Asset asset)
	{
		SendMail email = new SendMail();
		assetRepository.save(asset);
		email.sendMails(asset.getAssignedUser(), "New Equipment", "You have been assigned new equipment.\n" + "Your new "+ asset.getName() + " will be delivered to your desk soon.");
	}
	
	//updates asset table
	@Transactional
	@RequestMapping(value="/asset/id", 
			consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE,
			method= RequestMethod.POST)
	public void submitAssetUpdateDetails(@RequestBody Asset asset)//, @RequestBody String lastName, @RequestBody String accessLevel, @RequestBody String email)
	{
		
		assetRepository.submitAssetUpdateDetails(asset.getAssetNum(), asset.getManufacturer(), asset.getModelNum(), asset.getStyleCode(), asset.getSerialNum(),
				asset.getDatePurchased(), asset.getLocation(), asset.getName(), asset.getType(), asset.getDateLastServiced(), asset.getDateNextService(), 
				asset.getVersion(), asset.getAssignedUser(), asset.getNotes());
	}
	
	//returns a simgle asset for editing
	@RequestMapping(value="/asset/search", 
			 produces = MediaType.APPLICATION_JSON_VALUE,
			method= RequestMethod.GET)
	public Asset getAssetsById(int assetNum)
	{
		return assetRepository.getAssetById(assetNum);
	}
	
	//returns a list of assets based on a users email
	@RequestMapping(value="/assigned_asset", 
			 produces = MediaType.APPLICATION_JSON_VALUE,
			method= RequestMethod.GET)
	public List<Asset> getAssetsByEmail(String email)
	{
		System.out.print(email);
		Asset asset;
		List<Asset> assets = assetRepository.getAssetByEmail(email);
		
		System.out.println("**********printing assets ************");

		System.out.println(assets);

		for (int i=0; i < assets.size(); i++)
		{
		
			System.out.println("------------printing asset ---------------");

			System.out.println(assets.get(i));
		}
		
		return assets;
		//assetRepository;
	}
}
