/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package service;

import model.AccountModel;
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
public class AccountDAO extends BaseDAO<AccountModel> {

    @Override
    public ArrayList<AccountModel> all() {
        ArrayList<AccountModel> listAccount = new ArrayList<>();
        String sql = "SELECT * FROM Account";
        try {
            PreparedStatement statement = connection.prepareStatement(sql);
            ResultSet rs = statement.executeQuery();
            while (rs.next()) {
                AccountModel a = new AccountModel();
                a.setID(rs.getInt("ID"));
                a.setUsername(rs.getString("username").trim());
                a.setPassword(rs.getString("password").trim());
                a.setEmail(rs.getString("email").trim());
                a.setDateCreated(rs.getDate("dateCreated"));
                a.setDateModified(rs.getDate("dateModified"));
                a.setUserID(rs.getInt("userID"));
                listAccount.add(a);
            }
        } catch (SQLException ex) {
            Logger.getLogger(AccountDAO.class.getName()).log(Level.SEVERE, null, ex);
        }
        return listAccount;
    }

    @Override
    public AccountModel get(int id) {
        AccountModel a = new AccountModel();

        String sql = "SELECT * FROM Account WHERE ID = " + id;
        try {
            PreparedStatement statement = connection.prepareStatement(sql);
            ResultSet rs = statement.executeQuery();
            while (rs.next()) {
                a.setID(rs.getInt("ID"));
                a.setUsername(rs.getString("username").trim());
                a.setPassword(rs.getString("password").trim());
                a.setEmail(rs.getString("email").trim());
                a.setDateCreated(rs.getDate("dateCreated"));
                a.setDateModified(rs.getDate("dateModified"));
                a.setUserID(rs.getInt("userID"));
            }
        } catch (SQLException ex) {
            Logger.getLogger(AccountDAO.class.getName()).log(Level.SEVERE, null, ex);
        }
        return a;
    }

    public AccountModel get(AccountModel account) {
        AccountModel a = new AccountModel();

        String sql = "SELECT * FROM Account WHERE username = '" + account.getUsername()+"'";
        try {
            PreparedStatement statement = connection.prepareStatement(sql);
            ResultSet rs = statement.executeQuery();
            while (rs.next()) {
                a.setID(rs.getInt("ID"));
                a.setUsername(rs.getString("username").trim());
                a.setPassword(rs.getString("password").trim());
                a.setEmail(rs.getString("email").trim());
                a.setDateCreated(rs.getDate("dateCreated"));
                a.setDateModified(rs.getDate("dateModified"));
                a.setUserID(rs.getInt("userID"));
            }
        } catch (SQLException ex) {
            Logger.getLogger(AccountDAO.class.getName()).log(Level.SEVERE, null, ex);
        }
        if (a.getPassword() != null && a.getPassword().equals(account.getPassword())) {
            return a;
        } else {
            return null;
        }
    }

    @Override
    public void insert(AccountModel model) {
        try {
            String sql = "INSERT INTO Account\n"
                    + "VALUES (?, '?', '?', '?', GETDATE(), GETDATE(), ?)";
            PreparedStatement statement = connection.prepareStatement(sql);
            statement.setInt(1, model.getID());
            statement.setString(2, model.getUsername());
            statement.setString(3, model.getPassword());
            statement.setString(4, model.getEmail());
            statement.setInt(5, model.getUserID());
            statement.executeUpdate();
        } catch (SQLException ex) {
            Logger.getLogger(AccountDAO.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public void update(AccountModel model) {
        try {
            String sql = "UPDATE Account\n"
                    + "SET    [password] = '?'\n"
                    + "      ,[email] = '?'\n"
                    + "      ,[dateModified] = GETDATE()\n"
                    + " WHERE ID = ?";
            PreparedStatement statement = connection.prepareStatement(sql);
            statement.setString(1, model.getPassword());
            statement.setString(2, model.getEmail());
            statement.setInt(3, model.getID());
            statement.executeUpdate();
        } catch (SQLException ex) {
            Logger.getLogger(AccountDAO.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

}
