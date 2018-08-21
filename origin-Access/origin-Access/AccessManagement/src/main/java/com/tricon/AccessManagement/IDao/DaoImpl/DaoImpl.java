package com.tricon.AccessManagement.IDao.DaoImpl;
	import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.tricon.AccessManagement.IDao.IAccessDao;
	@Repository
	public class DaoImpl implements IAccessDao {
		@Autowired
		private JdbcTemplate jdbcTemplate;
		List<Integer> data =new ArrayList<Integer>();
		public boolean hasPrivilige(String Emp_Id,String Entitlement) {
			data.clear();
			String query="SELECT Entitlement_Id FROM role_Entitlement WHERE Role_Id IN (SELECT Role_Id FROM employee_role  WHERE Emp_Id ='"+Emp_Id+"')";
					 data=jdbcTemplate.queryForList(query,Integer.class);
		
		String query2="SELECT Entitlement_Id From entitlement Where Entitlement= ? ";
		
		int Ent_Id = jdbcTemplate.queryForObject(query2, new Object[] {Entitlement}, Integer.class);	
	if(data.contains(Ent_Id)) 
	{
		
		return true;
	}
	return false;
		
	}
	}
	
