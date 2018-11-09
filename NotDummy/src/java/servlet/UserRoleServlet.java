/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servlet;

import controller.UserDao;
import controller.UserRoleDao;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import models.Role;
import models.User;

/**
 *
 * @author demonslight998
 */
public class UserRoleServlet extends HttpServlet {

	protected void processRequest(HttpServletRequest request, HttpServletResponse response)
					throws ServletException, IOException {
		response.setContentType("text/html;charset=UTF-8");
		try {
			// if users click on save button
			if (request.getParameter("save") != null) {
				String username = request.getParameter("username");
				String role = request.getParameter("role");
                                UserDao u = new UserDao();
                                u.insert(username, role);
			}
			String username = request.getParameter("username");
			List<User> users = new UserDao().getAllUser();

			int size = users.size();
			request.setAttribute("users", users);
			request.setAttribute("size", size);
			if (username == null) {
			   username = users.get(0).getUsername();
			}
			request.setAttribute("assingedRoles", new UserRoleDao().getRolesByUser(username));
			request.setAttribute("username", username);
			request.setAttribute("roles", new UserRoleDao().getNotRolesByUser(username));
			request.getRequestDispatcher("/addUserRole.jsp").forward(request, response);
		} catch (Exception e) {
			response.getWriter().print(e);
		}
	}
	
	
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
					throws ServletException, IOException {
		processRequest(request, response);
//		try {
//			// if users click on save button
//			if (request.getParameter("save") != null) {
//				String username = request.getParameter("username");
//				String role = request.getParameter("role");
//			}
//			String username = request.getParameter("username");
//			List<User> users = new UserDao().getAllUser();
//			for (User user : users) {
//				System.out.println(user.getUsername());
//			}
//			int size = users.size();
//			request.setAttribute("users", users);
//			request.setAttribute("size", size);
//			if (username == null) {
//				username = users.get(0).getUsername();
//			}
//			request.setAttribute("assingedRoles", new UserRoleDao().getRolesByUser(username));
//			request.setAttribute("username", username);
//			request.setAttribute("roles", new UserRoleDao().getNotRolesByUser(username));
//			request.getRequestDispatcher("/addUserRole.jsp").forward(request, response);
//		} catch (Exception e) {
//		}
	}

	/**
	 * Handles the HTTP <code>POST</code> method.
	 *
	 * @param request servlet request
	 * @param response servlet response
	 * @throws ServletException if a servlet-specific error occurs
	 * @throws IOException if an I/O error occurs
	 */
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
					throws ServletException, IOException {
		processRequest(request, response);
//		try {
//			// if users click on save button
//			if (request.getParameter("save") != null) {
//				String username = request.getParameter("username");
//				String role = request.getParameter("role");
//			}
//			String username = request.getParameter("username");
//			List<User> users = new UserDao().getAllUser();
//			for (User user : users) {
//				System.out.println(user.getUsername());
//			}
//			int size = users.size();
//			request.setAttribute("users", users);
//			request.setAttribute("size", size);
//			if (username == null) {
//				username = users.get(0).getUsername();
//			}
//			request.setAttribute("assingedRoles", new UserRoleDao().getRolesByUser(username));
//			request.setAttribute("username", username);
//			request.setAttribute("roles", new UserRoleDao().getNotRolesByUser(username));
//			request.getRequestDispatcher("/addUserRole.jsp").forward(request, response);
//		} catch (Exception e) {
//		}
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
