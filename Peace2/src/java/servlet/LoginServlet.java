/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servlet;

import controller.UserDao;
import java.io.IOException;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
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

		List<User> listUser = new UserDao().getAllUser();
		for (User user : listUser) {
			System.out.println(user.getUsername());
		}
		User temp = null;
		for (User u : listUser) {
			if (!u.getUsername().equalsIgnoreCase(username)) {
				request.setAttribute("error", "User not exist");
				request.getRequestDispatcher("/Login.jsp").forward(request, response);
			} else {
				temp = u;
			}
		}
		if (!temp.getPassword().equalsIgnoreCase(password)){
			request.setAttribute("error", "Password not matching !");
				request.getRequestDispatcher("/Login.jsp").forward(request, response);
		}
		request.setAttribute("user", temp);
		request.getRequestDispatcher("/RoleFeature.jsp").forward(request, response);
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
