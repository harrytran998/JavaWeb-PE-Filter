/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package models;

import controller.FeatureDao;
import java.util.List;

/**
 *
 * @author demonslight998
 */
public class Role {

	private int id;
	private String name;

	public Role() {
	}

	public Role(int id, String name) {
		this.id = id;
		this.name = name;
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

	public List<Feature> getFeatures_Roles() throws Exception {
		return new FeatureDao().getFeaturesByRole(id);
	}

}
