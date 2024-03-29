/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package models;

import controller.FeatureDao;
import controller.RoleDao;
import java.util.List;

/**
 *
 * @author demonslight998
 */
public class Feature {

	private int id;
	private String url;
	
	public Feature() {
	}
	
	public Feature(int id, String url) {
		this.id = id;
		this.url = url;
	}
	
	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public String getUrl() {
		return url;
	}
	
	public void setUrl(String url) {
		this.url = url;
	}

	@Override
	public String toString() {
		return "Feature{" + "id=" + id + ", url=" + url + '}';
	}
	
	
	public List<Role> getRoles() throws Exception {
		return new RoleDao().getRolesByFeature(id);
	}
	
}
