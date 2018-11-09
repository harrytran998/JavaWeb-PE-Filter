/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package service;

import model.UserModel;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author MTC
 */
public class UserDAO extends BaseDAO<UserModel> {

    @Override
    public ArrayList<UserModel> all() {
        ArrayList<UserModel> listUser = new ArrayList<>();
        String sql = "SELECT * FROM User";
        try {
            PreparedStatement statement = connection.prepareStatement(sql);
            ResultSet rs = statement.executeQuery();
            while (rs.next()) {
                UserModel a = new UserModel();
                a.setID(rs.getInt("ID"));
                a.setName(rs.getString("name").trim());
                a.setDob(rs.getDate("dob"));
                a.setGender(rs.getBoolean("gender"));
                a.setAddress(rs.getString("address").trim());
                a.setRoleID(rs.getInt("roleID"));
                listUser.add(a);
            }
        } catch (SQLException ex) {
            Logger.getLogger(UserDAO.class.getName()).log(Level.SEVERE, null, ex);
        }
        return listUser;
    }

    @Override
    public UserModel get(int id) {
        UserModel a = new UserModel();

        String sql = "SELECT * FROM User WHERE ID = " + id;
        try {
            PreparedStatement statement = connection.prepareStatement(sql);
            ResultSet rs = statement.executeQuery();
            while (rs.next()) {
                a.setID(rs.getInt("ID"));
                a.setName(rs.getString("name").trim());
                a.setDob(rs.getDate("dob"));
                a.setGender(rs.getBoolean("gender"));
                a.setAddress(rs.getString("address").trim());
                a.setRoleID(rs.getInt("roleID"));
            }
        } catch (SQLException ex) {
            Logger.getLogger(UserDAO.class.getName()).log(Level.SEVERE, null, ex);
        }
        return a;
    }
    
    public int getRoleID (int userId) {
        int a = 0;
        String sql = "SELECT roleID FROM dbo.[User] WHERE ID = " + userId;
        try {
            PreparedStatement statement = connection.prepareStatement(sql);
            ResultSet rs = statement.executeQuery();
            while (rs.next()) {
                a = rs.getInt("roleID");
            }
        } catch (SQLException ex) {
            Logger.getLogger(UserDAO.class.getName()).log(Level.SEVERE, null, ex);
        }
        return a;
    }

    @Override
    public void insert(UserModel model) {
        try {
            String sql = "INSERT INTO User\n"
                    + "VALUES (?, '?', '?', ?, '?', ?)";
            PreparedStatement statement = connection.prepareStatement(sql);
            statement.setInt(1, model.getID());
            statement.setString(2, model.getName());
            statement.setDate(3, model.getDob());
            statement.setBoolean(4, model.isGender());
            statement.setString(5, model.getAddress());
            statement.setInt(6, model.getRoleID());
            statement.executeUpdate();
        } catch (SQLException ex) {
            Logger.getLogger(UserDAO.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public void update(UserModel model) {
        try {
            String sql = "UPDATE Account\n"
                    + "SET    [name] = '?'\n"
                    + "      ,[dob] = '?'\n"
                    + "      ,[gender] = ?\n"
                    + "      ,[address] = '?'\n"
                    + " WHERE ID = ?";
            PreparedStatement statement = connection.prepareStatement(sql);
            statement.setString(1, model.getName());
            statement.setDate(2, model.getDob());
            statement.setBoolean(3, model.isGender());
            statement.setString(4, model.getAddress());
            statement.executeUpdate();
        } catch (SQLException ex) {
            Logger.getLogger(UserDAO.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

}
