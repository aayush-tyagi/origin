package com.tricon.AccessManagement.Model;

import java.util.List;

public class AccessModel {
	private String empId;
	private String entitlement;
	private int roleId;
	private List entitlementId;
	public AccessModel() {
		
	}
	
	public AccessModel(String empId,String entitlement,int roleId,List entitlementId){
		this.empId=empId;
		this.entitlement=entitlement;
		this.roleId=roleId;
		this.entitlementId=entitlementId;
		
	}
	public String getEmpId() {
		return empId;
	}
	public void setEmpId(String empId) {
		this.empId = empId;
	}
	public String getEntitlement() {
		return entitlement;
	}
	public void setEntitlement(String entitlement) {
		this.entitlement = entitlement;
	}
	public int getRoleId() {
		return roleId;
	}
	public void setRoleId(int roleId) {
		this.roleId = roleId;
	}
	public List getEntitlementId() {
		return entitlementId;
	}
	public void setEntitlementId(List entitlementId) {
		this.entitlementId = entitlementId;
	}

	

}
