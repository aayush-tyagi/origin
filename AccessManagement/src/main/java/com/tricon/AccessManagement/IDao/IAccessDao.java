package com.tricon.AccessManagement.IDao;

import com.tricon.AccessManagement.model.Model;

public interface IAccessDao {
public Model checkPrivilige(int id);
public String getRole(String roleId);


}
