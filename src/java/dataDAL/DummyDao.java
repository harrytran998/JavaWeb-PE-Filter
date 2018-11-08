/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dataDAL;

import dataObj.Dummy;
import db.DBContext;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;

/**
 *
 * @author demonslight998
 */
public class DummyDao {

	public ArrayList<Dummy> listDummy() {
		ArrayList<Dummy> listDummy = new ArrayList<>();
		Connection con = null;
		DBContext db = new DBContext();
		try {
			con = db.getConnection();
			Statement stmt = con.createStatement();
			String sql = "SELECT * FROM dbo.Dummy";
			ResultSet rs = stmt.executeQuery(sql);
			while (rs.next()) {
				int id = rs.getInt(1);
				String name = rs.getString(2);
				listDummy.add(new Dummy(id, name));
			}
			rs.close();
			stmt.close();
			con.close();
			return listDummy;
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		return null;
	}

	public void insert(int featureID, String urI) {
		Connection con = null;
		DBContext db = new DBContext();
		try {
			con = db.getConnection();
			String sql = "INSERT INTO dbo.Dummy\n"
							+ "(\n"
							+ "    DummyID,\n"
							+ "    DummyName\n"
							+ ") VALUES (?, ?)";
			PreparedStatement stmt = con.prepareStatement(sql);
			stmt.setInt(1, featureID);
			stmt.setString(2, urI);
			stmt.executeUpdate();
			stmt.close();
			con.close();
		} catch (Exception ex) {
			ex.printStackTrace();
		}
	}

	public void edit(String dummyName, int featureID) {
		Connection con = null;
		DBContext db = new DBContext();
		try {
			con = db.getConnection();
			String sql = "UPDATE dbo.Dummy SET  DummyName = ? WHERE DummyID = ?";
			PreparedStatement stmt = con.prepareStatement(sql);
			stmt.setString(1, dummyName);
			stmt.setInt(2, featureID);
			stmt.executeUpdate();
			stmt.close();
			con.close();
		} catch (Exception ex) {
			ex.printStackTrace();
		}
	}

	public void delete(String dummyID) {
		Connection con = null;
		DBContext db = new DBContext();
		try {
			con = db.getConnection();
			String sql = "DELETE FROM dbo.Dummy WHERE DummyID = ?";
			PreparedStatement stmt = con.prepareStatement(sql);
			stmt.setString(1, dummyID);
			stmt.executeUpdate();
			stmt.close();
			con.close();
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		return;
	}
	
}
