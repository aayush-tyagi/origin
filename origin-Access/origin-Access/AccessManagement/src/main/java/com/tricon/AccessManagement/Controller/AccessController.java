package com.tricon.AccessManagement.Controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tricon.AccessManagement.IDao.*;

@RestController
public class AccessController{
	@Autowired
	private IAccessDao Dao;
	@RequestMapping(value="/login/{Emp_Id}/en/{entitlement}",method=RequestMethod.GET)
	public boolean hasPrivilige(@PathVariable String Emp_Id,@PathVariable String entitlement) {
		
	return Dao.hasPrivilige(Emp_Id,entitlement);
	} 
}

