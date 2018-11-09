/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package service;

import model.RoleDetailModel;
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
public class RoleDetailDAO extends BaseDAO<RoleDetailModel> {

    @Override
    public ArrayList<RoleDetailModel> all() {
        ArrayList<RoleDetailModel> listUser = new ArrayList<>();
        String sql = "SELECT Role.ID, Role.role, RoleDetail.action, RoleDetail.link\n"
                + " FROM Role INNER JOIN\n"
                + " Role_RoleDetail_rf ON Role.ID = Role_RoleDetail_rf.roleID INNER JOIN\n"
                + " RoleDetail ON Role_RoleDetail_rf.roleDetailID = RoleDetail.ID";
        try {
            PreparedStatement statement = connection.prepareStatement(sql);
            ResultSet rs = statement.executeQuery();
            while (rs.next()) {
                RoleDetailModel a = new RoleDetailModel();
                a.setID(rs.getInt("ID"));
                a.setRole(rs.getString("role").trim());
                a.setAction(rs.getString("action").trim());
                a.setLink(rs.getString("link").trim());
                listUser.add(a);
            }
        } catch (SQLException ex) {
            Logger.getLogger(RoleDetailDAO.class.getName()).log(Level.SEVERE, null, ex);
        }
        return listUser;
    }

    @Override
    public RoleDetailModel get(int roleID) {
        RoleDetailModel a = new RoleDetailModel();

        String sql = "SELECT TOP 1 Role.ID, Role.role, RoleDetail.action, RoleDetail.link\n"
                + " FROM Role INNER JOIN\n"
                + " Role_RoleDetail_rf ON Role.ID = Role_RoleDetail_rf.roleID INNER JOIN\n"
                + " RoleDetail ON Role_RoleDetail_rf.roleDetailID = RoleDetail.ID"
                + " WHERE Role.ID = " + roleID;
        try {
            PreparedStatement statement = connection.prepareStatement(sql);
            ResultSet rs = statement.executeQuery();
            while (rs.next()) {
                a.setID(rs.getInt("ID"));
                a.setRole(rs.getString("role").trim());
                a.setAction(rs.getString("action").trim());
                a.setLink(rs.getString("link").trim());
            }
        } catch (SQLException ex) {
            Logger.getLogger(RoleDetailDAO.class.getName()).log(Level.SEVERE, null, ex);
        }
        return a;
    }

    private ArrayList<RoleDetailModel> getListRoleByID(int roleID) {
        ArrayList<RoleDetailModel> listRole = new ArrayList<>();
        String sql = "SELECT Role.ID, Role.role, RoleDetail.action, RoleDetail.link\n"
                + " FROM Role INNER JOIN\n"
                + " Role_RoleDetail_rf ON Role.ID = Role_RoleDetail_rf.roleID INNER JOIN\n"
                + " RoleDetail ON Role_RoleDetail_rf.roleDetailID = RoleDetail.ID"
                + " WHERE Role.ID = " + roleID;
        try {
            PreparedStatement statement = connection.prepareStatement(sql);
            ResultSet rs = statement.executeQuery();
            while (rs.next()) {
                RoleDetailModel a = new RoleDetailModel();
                a.setID(rs.getInt("ID"));
                a.setRole(rs.getString("role").trim());
                a.setAction(rs.getString("action").trim());
                a.setLink(rs.getString("link").trim());
                listRole.add(a);
            }
        } catch (SQLException ex) {
            Logger.getLogger(RoleDetailDAO.class.getName()).log(Level.SEVERE, null, ex);
        }
        return listRole;
    }
    
    public boolean checkRole(int roleID, String link){
        ArrayList<RoleDetailModel> listRole = getListRoleByID(roleID);
        for (RoleDetailModel role : listRole) {
            if (role.getLink().equals(link)){
                return true;
            }
        }
        return false;
    }
    
    @Override
    public void insert(RoleDetailModel model) {
        
    }
}   