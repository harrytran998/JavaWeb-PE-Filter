<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%-- 
    Document   : ListDummy
    Created on : Nov 10, 2018, 1:25:44 AM
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
		<h1>List Dummy</h1>
		<table border="1" cellspacing="0">
			<thead>
				<tr>
					<th>Dummy ID</th>
					<th>Dummy Name</th>
				</tr>
			</thead>
			<tbody>
			<c:forEach var="dum" items="${listDummies}">
				<tr>
					<td>${dum.id}</td>
					<td>${dum.name}</td>
				</tr>
			</c:forEach>
			</tbody>
		</table>
		<a href="RoleFeature.jsp">
			<input type="submit" value="Return Home Page" />
		</a>
	</body>
</html>
