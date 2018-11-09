/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import model.UserModel;
import service.RoleDetailDAO;

/**
 *
 * @author cuongnx
 */
public abstract class AuthenticationBaseController extends BaseController
{
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        if(!isAuthenticated(request))
            response.sendRedirect("Login");
        else if (!isAccessable(request)){
            request.getRequestDispatcher("AccessDenied.jsp").forward(request, response);
        } else
            super.doGet(request, response); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        if(!isAuthenticated(request))
            response.sendRedirect("Login");
        else
            super.doPost(request, response); //To change body of generated methods, choose Tools | Templates.
    }
    
    private boolean isAuthenticated(HttpServletRequest request)
    {
        UserModel account =(UserModel)
                request.getSession().getAttribute("user");
        return account != null;
    }
    
    private boolean isAccessable(HttpServletRequest request)
    {
        UserModel account =(UserModel)
                request.getSession().getAttribute("user");
        RoleDetailDAO rodeDAO = new RoleDetailDAO();
        return rodeDAO.checkRole(account.getRoleID(), request.getRequestURI());
    }
}
