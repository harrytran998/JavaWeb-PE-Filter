/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author demonslight998
 */
public class Register extends HttpServlet {

	// <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
	/**
	 * Handles the HTTP <code>GET</code> method.
	 *
	 * @param request servlet request
	 * @param response servlet response
	 * @throws ServletException if a servlet-specific error occurs
	 * @throws IOException if an I/O error occurs
	 */
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
		boolean flag = true;

//		String dateBirthStr = request.getParameter("dateBirth");
//		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
//		Date dateBirth = null;
//		try {
//			dateBirth = (Date) sdf.parse(dateBirthStr);
//		} catch (ParseException ex) {
//			Logger.getLogger(Register.class.getName()).log(Level.SEVERE, null, ex);
//		}
		Date d = Date.valueOf(request.getParameter("dateBirth"));
		boolean gender = (request.getParameter("gender").equals("Male") ? true : false);
		String job = request.getParameter("job");
		User user = new User(username, d, gender, job);
		if (username.trim().isEmpty()) {
			request.setAttribute("error", "LOL");
			flag = false;
		}
//		if (d.toString().isEmpty()) {
//			request.setAttribute("error", "LOL");
//			flag = false;
//		}

		if (!flag) {
			request.setAttribute("user", user);
			request.getRequestDispatcher("HelloWold.jsp").forward(request, response);
		} else {
			request.setAttribute("user", user);
			request.getRequestDispatcher("Result.jsp").forward(request, response);
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
