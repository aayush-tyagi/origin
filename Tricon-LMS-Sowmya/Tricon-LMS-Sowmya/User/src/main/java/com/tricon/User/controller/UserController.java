package com.tricon.User.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tricon.User.classModal.User;
import com.tricon.User.serviceInterface.IUserService;
@CrossOrigin(origins="*")
@RestController
public class UserController {

	@Autowired
	private IUserService  student;
	
	@RequestMapping("/users")
	public List<User> getAllUsers() {
		
		return student.getAllUsers();
	}
	
	/*@RequestMapping(value="/users/{id}",method=RequestMethod.GET)
	public User getUser(@PathVariable int id) {
		
		return student.getUser(id);
	}
	
	@RequestMapping(value="/users",method=RequestMethod.POST)
	public String addUser(@RequestBody User userObject) {
		
		student.addUser(userObject);
		return "updated success";
	}
	
	@RequestMapping(value="/users/{id}",method=RequestMethod.DELETE)
	public String User(@PathVariable int id) {
		
		student.deleteUser(id);
		return "deleted success";
	}
	
	@RequestMapping(value="/users",method=RequestMethod.PUT)
	public String User(@RequestBody User userObject) {
		
		student.updateUser(userObject);
		return "updated success";
	}*/
}
