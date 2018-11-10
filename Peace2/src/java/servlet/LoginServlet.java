/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servlet;

import controller.RoleDao;
import controller.UserDao;
import java.io.IOException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import models.Role;
import models.User;

/**
 *
 * @author demonslight998
 */
public class LoginServlet extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
					throws ServletException, IOException {
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

		try {
			String username = request.getParameter("username");
			String password = request.getParameter("password");
			if (username.trim().isEmpty() || username == null) {
				request.setAttribute("error", "Username can't be empty");
				request.getRequestDispatcher("/Login.jsp").forward(request, response);
			}

			if (password.trim().isEmpty() || password == null) {
				request.setAttribute("error", "Password can't be empty");
				request.getRequestDispatcher("/Login.jsp").forward(request, response);
			}
			request.setAttribute("username", username);
			request.setAttribute("password", password);

			boolean existedUser = new UserDao().checkUserExist(username);
			if (!existedUser) {
				request.setAttribute("error", "User not exist");
				request.getRequestDispatcher("/Login.jsp").forward(request, response);
			}
			boolean passMatching = new UserDao().checkPasswordMatching(username, password);
			if (!passMatching) {
				request.setAttribute("errorPass", "Password not matching !");
				request.getRequestDispatcher("/Login.jsp").forward(request, response);
			}
			List<Role> listRoles = new RoleDao().getRoleByUser(username);
			request.setAttribute("listRoles", listRoles);

			User temp = new User(username, password);
			HttpSession session = request.getSession();
			session.setAttribute("username", username);

			request.setAttribute("user", temp);
			request.getRequestDispatcher("/RoleFeature.jsp").forward(request, response);
		} catch (Exception ex) {
			Logger.getLogger(LoginServlet.class.getName()).log(Level.SEVERE, null, ex);
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
