/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controller;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import model.AccountModel;
import model.RoleDetailModel;
import service.AccountDAO;
import service.RoleDetailDAO;
import service.UserDAO;

/**
 *
 * @author MTC
 */
public class LoginController extends BaseController {

    @Override
    protected void processPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();
        AccountDAO accDAO = new AccountDAO();
        UserDAO userDAO = new UserDAO();
        RoleDetailDAO rodeDAO = new RoleDetailDAO();
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        AccountModel dummy = new AccountModel();
        dummy.setUsername(username);
        dummy.setPassword(password);
        dummy = accDAO.get(dummy);
        
        //writer to check
        PrintWriter out = response.getWriter();
        out.println(request.getServletPath());
        if (dummy != null){
            AccountModel user = new AccountModel();
            user.setUsername(dummy.getUsername());
            user.setUserID(dummy.getUserID());
            //user = dummy;
            session.setAttribute("user", user);
            
            int roleID = userDAO.getRoleID(dummy.getUserID());
            RoleDetailModel r = rodeDAO.get(roleID);
            if (r.getRole().equals("admin")){
                response.sendRedirect("./manage/HomePage");
            } else {
                response.sendRedirect("./user/HomePage");
            }
        } else {
            request.getRequestDispatcher("Login/Login.jsp").forward(request, response);
        }
    }

    @Override
    protected void processGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();
        UserDAO userDAO = new UserDAO();
        RoleDetailDAO rodeDAO = new RoleDetailDAO();
        AccountModel dummy = (AccountModel) session.getAttribute("user");
        if (dummy != null){            
            int roleID = userDAO.getRoleID(dummy.getUserID());
            RoleDetailModel r = rodeDAO.get(roleID);
            if (r.getRole().equals("admin")){
                response.sendRedirect("./manage/HomePage");
            } else {
                response.sendRedirect("./user/HomePage");
            }
        } else {
            request.getRequestDispatcher("Login/Login.jsp").forward(request, response);
        }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
