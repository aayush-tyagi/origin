package com.tricon.AccessManagement.IDao.DaoImpl;
	import java.sql.ResultSet;
import java.sql.SQLException;

	import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.tricon.AccessManagement.IDao.IAccessDao;
import com.tricon.AccessManagement.model.Model;
	@Repository
	public class DaoImpl implements IAccessDao {
		@Autowired
		private JdbcTemplate jdbcTemplate;
		public Model checkPrivilige(int id){
			return this.jdbcTemplate.queryForObject("select * from access where id= "+ id,new RowMapper<Model>() {
				public Model mapRow(ResultSet rs, int rowNum) throws SQLException{
				Model s=new Model();
				s.setId(rs.getInt("id"));
				s.setRole(rs.getString("role"));
				return s;
				}
			});
			
		}
		public String getRole(String roleId) {
			
			return (String) this.jdbcTemplate.queryForObject("select role from access where roleId= "+ roleId,new RowMapper() {
				public String mapRow(ResultSet rs, int rowNum) throws SQLException{
				Model s=new Model();
				//s.setRoleId(rs.getString("roleId"));
				s.setRoleId(rs.getString(roleId));
				s.setRole(rs.getString("role"));
				return s.getRole();
				}
			});
			//return null;
		}

	}


	
