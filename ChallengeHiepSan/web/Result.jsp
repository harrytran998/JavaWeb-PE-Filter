<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%-- 
    Document   : Result
    Created on : Nov 9, 2018, 12:00:09 AM
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
		<form method="">
			Username: ${user.username} <br>
			Date of birth: <fmt:formatDate value="${user.dateOfBirth}" pattern="yyyy-dd-MM" /><br>
			Gender: <c:if test="${user.gender}">"Male"</c:if><br>
			 <c:if test="${!user.gender}"> Fermale </c:if><br>
			Job:<c:if test="${user.job == 1}">Bithc</c:if><br>
		</form>
	</body>
</html>
