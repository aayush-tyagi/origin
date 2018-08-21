package com.tricon.AccessManagement;

import org.junit.BeforeClass;
import org.junit.Test;

import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.ui.Model;

import com.tricon.AccessManagement.IDao.DaoImpl.DaoImpl;
import com.tricon.AccessManagement.Model.AccessModel;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class AccessManagementApplicationTests {
	private static DaoImpl Dao;
	static AccessModel user1;
	static AccessModel user2;
	static List<Integer> List=new ArrayList<Integer>();
	static List<Integer> List1=new ArrayList<Integer>();
	
	
	
	@BeforeClass
	 public static void setUp(){
		 Dao = mock(DaoImpl.class);
		  List.add(01);
	   	List.add(02);
		List1.add(02);
		List1.add(03);
		user1=new AccessModel("101","All_Courses",01,List);
		user2=new AccessModel("102","Registered_Courses",02,List1);

	 }

	@Test
	public void testhasprivilige() {
		
		when(Dao.hasPrivilige(user1.getEmpId(), user1.getEntitlement())).thenReturn(true);
		   when(Dao.hasPrivilige(user2.getEmpId(),user2.getEntitlement())).thenReturn(true);
		assertEquals(true, Dao.hasPrivilige("101", "All_Courses"));
		assertEquals(true, Dao.hasPrivilige("102", "All_Courses"));
		
	}

}
