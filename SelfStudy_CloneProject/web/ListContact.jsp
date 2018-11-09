<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%-- 
    Document   : ListContact
    Created on : Nov 9, 2018, 4:03:01 PM
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
		<h1>List of contacts</h1>
		<table border="1">
			<thead>
				<tr>
					<th>ID</th>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Group</th>
					<th>Phone Number</th>
					<th>Operations</th>
				</tr>
			</thead>
			<tbody>
			<c:forEach var="con" items="${listContact}">
				<tr>
					<td>${con.id}</td>
					<td>${con.first}</td>
					<td>${con.last}</td>
					<td>${con.group}</td>
					<td>${con.phone}</td>
					<td>
						<a href="EditContact?id=${con.id}">Edit</a>
						<a href="DeleteContact?id=${con.id}">Remove</a>
					</td>
				</tr>
			</c:forEach>
				<a href="ReAddContact">
							<input type="submit" name="ReAddContact" value="" />
						</a>
						<a href="ReListGroup">
							<input type="submit" name="ReListGroup" value="" />
						</a>
			</tbody>
		</table>
	</body>
</html>
