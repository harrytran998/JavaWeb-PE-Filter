<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%-- 
    Document   : HelloWold
    Created on : Nov 8, 2018, 11:38:32 PM
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
		<h5 style="color: red">${error}</h5>
		<form action="Register" method="POST">
			Username: <input type="text" name="username" value="${user.username}" /> <br>
			Date of birth: <input type="date" name="dateBirth" value="${user.dateOfBirth}" /><br>
			<c:if test="${user.gender}">
				Fermale<input type="checkbox" name="gender" checked="checked" /> <br>
			</c:if>
			<c:if test="${!user.gender}">
				Gender: Male<input type="checkbox" name="gender" value=""/>
			</c:if> <br>
			Job: <select name="job">
				<option value="1">Bitch</option>
				<option value="2">Fucker</option>
			</select>
			<input type="submit" value="Submit" />
		</form>
	</body>
</html>
