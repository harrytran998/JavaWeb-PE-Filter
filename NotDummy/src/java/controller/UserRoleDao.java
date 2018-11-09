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
import models.Query;
import models.Role;

/**
 *
 * @author demonslight998
 */
public class UserRoleDao {

	public ArrayList<Role> getRolesByUser(String username) {
		ArrayList<Role> listRole = new ArrayList<>();
		Connection con = null;
		DBContext db = new DBContext();
		try {
			con = db.getConnection();
			Statement stmt = con.createStatement();
			String sql = "SELECT r.* FROM dbo.Role_User ru JOIN dbo.Roles r\n"
					+ "ON r.roleid = ru.roleid WHERE ru.username = '" + username + "'";
			ResultSet rs = stmt.executeQuery(sql);
			while (rs.next()) {
				int roleID = rs.getInt(1);
				String name = rs.getString(2);
				listRole.add(new Role(roleID, name));
			}
			rs.close();
			stmt.close();
			con.close();
			return listRole;
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		return null;
	}
	
	public ArrayList<Role> getNotRolesByUser(String username) {
		ArrayList<Role> listRole = new ArrayList<>();
		Connection con = null;
		DBContext db = new DBContext();
		try {
			con = db.getConnection();
			Statement stmt = con.createStatement();
			String sql = "SELECT * FROM dbo.Roles WHERE roleid NOT IN (\n"
					+ "	SELECT roleid FROM dbo.Role_User WHERE username = '" + username + "')";
			ResultSet rs = stmt.executeQuery(sql);
			while (rs.next()) {
				int roleID = rs.getInt(1);
				String name = rs.getString(2);
				listRole.add(new Role(roleID, name));
			}
			rs.close();
			stmt.close();
			con.close();
			return listRole;
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		return null;
	}
	
	
}
