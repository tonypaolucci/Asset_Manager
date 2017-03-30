//package lab.controller;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.MediaType;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RestController;
//
//import entity.Student;
//import repository.StudentRepository;
//
//@CrossOrigin
//@RestController
//public class StudentController {
//
//	@Autowired
//	StudentRepository sRepo;
//	
//	@RequestMapping(value="/submitStudentDetails", 
//			consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE,
//			method= RequestMethod.POST)
//	public void submitStudentDetails(@RequestBody Student student)
//	{
//		sRepo.save(student);
//	}
//	
//	@RequestMapping(value="/getStudantByEmail", 
//			 produces = MediaType.APPLICATION_JSON_VALUE,
//			method= RequestMethod.GET)
//	public Student getStudantByEmail( String email)
//	{
//		
//		return sRepo.findOne(email);
//		//sRepo.save(student);
//	}
//	
//	@RequestMapping(value="/getStudentFirstNames", 
//			 produces = MediaType.APPLICATION_JSON_VALUE,
//				method= RequestMethod.GET)
//	public List<Student>  getStudentFirstNames()
//	{
//		//List<Student> sArr = sRepo.findAll();
//		return sRepo.findAll();
//	}
//}
