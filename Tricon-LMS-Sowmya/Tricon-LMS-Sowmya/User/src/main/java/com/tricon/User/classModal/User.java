package com.tricon.User.classModal;

public class User {
	private int id;
	private String name;
//	private String address;
	private String role;
	private String status;

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public User(int id, String name, String role,String status) {
		super();
		this.id = id;
		this.name = name;
		this.role=role;
		this.status=status;
	//	this.address = address;
	}

	public User() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}



	

}
