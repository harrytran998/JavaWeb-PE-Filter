/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controller;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import models.DBContext;
import models.Query;
import models.User;

/**
 *
 * @author demonslight998
 */
public class UserDao {

	public ArrayList<User> getAllUser() {
		ArrayList<User> listUser = new ArrayList<>();
		Connection con = null;
		DBContext db = new DBContext();
		try {
			con = db.getConnection();
			Statement stmt = con.createStatement();
			String sql = Query.User_Select;
			ResultSet rs = stmt.executeQuery(sql);
			while (rs.next()) {
				String username = rs.getString(1);
				String password = rs.getString(2);
				listUser.add(new User(username, password));
			}
			rs.close();
			stmt.close();
			con.close();
			return listUser;
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		return null;
	}
	
	public boolean checkUserExist(String username) throws Exception {
        Connection con = null;
        DBContext db = new DBContext();
        try {
            con = db.getConnection();
            String sql = "SELECT * FROM dbo.Users WHERE username = '" + username + "'";
            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery(sql);
            if (rs.next()) {
                return true;
            }
            rs.close();
            stmt.close();
            con.close();
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        return false;
    }

    public boolean checkPasswordMatching(String username, String password) throws Exception {
        Connection con = null;
        DBContext db = new DBContext();
        try {
            con = db.getConnection();
            String sql = "SELECT * FROM dbo.Users WHERE username = '" + username + "'";
            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery(sql);
            User user = null;
            while (rs.next()) {
                String usernameDB = rs.getString(1);
                String passwordDB = rs.getString(2);
                user = new User(usernameDB, passwordDB);
            }
            if (password.equals(user.getPassword())) {
                return true;
            }
            rs.close();
            stmt.close();
            con.close();
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        return false;
    }
}
