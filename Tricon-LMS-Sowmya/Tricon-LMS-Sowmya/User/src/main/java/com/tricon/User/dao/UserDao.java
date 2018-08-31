package com.tricon.User.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.tricon.User.classModal.User;
import com.tricon.User.daoInterface.IUserDao;

@Repository
public class UserDao implements IUserDao {

	@Autowired
	JdbcTemplate jdbcTemplate;
	
	private static final String FETCH_STUDENT="select * from user";

	
	@Override
	public List<User> getAllUsers() {
		return this.jdbcTemplate.query(FETCH_STUDENT, new RowMapper<User>() {
			public User mapRow(ResultSet rs, int rowNum) throws SQLException {
			User s=new User();
			s.setId(rs.getInt("id"));
			s.setName(rs.getString("name"));
		//	s.setAddress(rs.getString("address"));
			s.setRole(rs.getString("role"));
			s.setStatus(rs.getString("status"));
			return s;
			}
		});
	}


	/*@Override
	public User getUser(int id) {
		return this.jdbcTemplate.queryForObject("select * from student where id="+id, new RowMapper<User>() {
			public User mapRow(ResultSet rs, int rowNum) throws SQLException {
			User s=new User();
			s.setId(rs.getInt("id"));
			s.setName(rs.getString("name"));
			s.setAddress(rs.getString("address"));
			return s;
			}
		});
	}


	@Override
	public void addUser(User studentObject) {
		jdbcTemplate.execute("insert into student(name,address)values('"+studentObject.getName()+"','"+studentObject.getAddress()+"')");  
		
	}


	@Override
	public void deleteUser(int id) {
	
		jdbcTemplate.execute("delete from student where id="+id);  
		
	}


	@Override
	public void updateUser(User studentObject) {
		
		jdbcTemplate.execute("update student set name='"+studentObject.getName()+"',address='"+studentObject.getAddress()+"'where id="+studentObject.getId());  
		
	}
*/
}
