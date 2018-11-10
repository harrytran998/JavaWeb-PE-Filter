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
import models.User;

/**
 *
 * @author demonslight998
 */
public class RoleDao {

	public ArrayList<Role> getRoleByUser(String username) {
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
				int id = rs.getInt(1);
				String name = rs.getString(2);
				listRole.add(new Role(id, name));
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
