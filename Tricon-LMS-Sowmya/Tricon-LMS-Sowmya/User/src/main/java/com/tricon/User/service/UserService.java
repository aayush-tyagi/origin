package com.tricon.User.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tricon.User.classModal.User;
import com.tricon.User.daoInterface.IUserDao;
import com.tricon.User.serviceInterface.IUserService;

@Service
public class UserService implements IUserService {

	@Autowired
	private IUserDao studentDao; 
	

	@Override
	public List<User> getAllUsers() {
		return studentDao.getAllUsers();
	}

	/*@Override
	public User getUser(int id) {
		return studentDao.getUser(id);
	}

	@Override
	public void addUser(User userObject) {
		studentDao.addUser(userObject);
	}

	@Override
	public void deleteUser(int id) {
		studentDao.deleteUser(id);
	}

	@Override
	public void updateUser(User userObject) {
		studentDao.updateUser(userObject);
	}
*/
}
