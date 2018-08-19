package com.tricon.AccessManagement.Controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tricon.AccessManagement.IDao.*;
import com.tricon.AccessManagement.model.Model;
@RestController
public class AccessController{
	@Autowired
	private IAccessDao Dao;
	//@Autowired
	//private Model m;
	@RequestMapping("/user")
	public String  getUser() {
		return "Inside: Controller";
		//return student.getUser();
		//return Dao.hasPrivilige();
	}
	//Model m;
	@RequestMapping(value="/login/{id}",method=RequestMethod.GET)
	public String hasPrivilige(@PathVariable int id,String entitlement) {
		//return "Inside:Controller";
	 Model m=Dao.checkPrivilige(id);
	 String role_id=m.getRole();
	 String role=Dao.getRole(role_id);
	 if(role==entitlement){
		 return "True";
		 
	 }
	 else {
		 return "False";
	 }
	 
	 }
	 
		
		
}

