/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controller;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import models.DBContext;
import models.Feature;
import models.Query;
import models.Role;

/**
 *
 * @author demonslight998
 */
public class FeatureDao {
	public ArrayList<Feature> getFeaturesByRole(int roleID) {
		ArrayList<Feature> listFeatures = new ArrayList<>();
		Connection con = null;
		DBContext db = new DBContext();
		try {
			con = db.getConnection();
			Statement stmt = con.createStatement();
			String sql = Query.Features_Role + roleID;
			ResultSet rs = stmt.executeQuery(sql);
			while (rs.next()) {
				int id = rs.getInt(1);
				String url = rs.getString(2);
				listFeatures.add(new Feature(id, url));
			}
			rs.close();
			stmt.close();
			con.close();
			return listFeatures;
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		return null;
	}
}
