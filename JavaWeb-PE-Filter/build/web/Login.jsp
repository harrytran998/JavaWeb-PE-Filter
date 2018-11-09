<%-- 
    Document   : Login
    Created on : Nov 9, 2018, 9:06:15 AM
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
		<h1>Hello World!</h1>
		<form action="LoginServerlet" method="POST">
			Username: <input type="text" name="username" value="${user.username}" />
			Password: <input type="password" name="password" value="${user.password}" />
			<input type="submit" value="Login" />
		</form>
	</body>
</html>
