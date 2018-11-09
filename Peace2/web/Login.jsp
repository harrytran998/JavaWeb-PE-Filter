<%-- 
    Document   : Login
    Created on : Nov 10, 2018, 12:12:29 AM
    Author     : demonslight998
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>JSP Page</title>
	</head>
	<body>
		
		<h1 style="color: red">${error}</h1>
		<form action="LoginServlet" method="POST">
			username: <input type="text" name="username" value="${username}" /> <br>
			password: <input type="password" name="password" value="${password}" /> <br>
			<input type="submit" value="Login" />
		</form>

	</body>
</html>
