/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package service;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;
import model.BaseModel;

/**
 *
 * @author sonnt
 * @param <T>
 */
public abstract class BaseDAO<T extends BaseModel> {

    protected Connection connection;

    public BaseDAO() {
        try {
            String serverName = "localhost";
            String dbName = "PRJ321_Assignment";
            String portNumber = "1433";
            String userID = "sa";
            String password = "Cu0ng 1998  ";
            //----------------------------------
            String url = "jdbc:sqlserver://" + serverName + ":" + portNumber + ";databaseName=" + dbName;
            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
            connection = DriverManager.getConnection(url,userID,password);
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(BaseDAO.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public abstract ArrayList<T> all();

    public abstract T get(int id);

    public abstract void insert(T model);

}
