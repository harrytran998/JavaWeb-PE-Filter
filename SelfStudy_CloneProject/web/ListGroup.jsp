<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%-- 
    Document   : ListGroup
    Created on : Nov 9, 2018, 4:11:10 PM
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
		<h1>Add a Group</h1>
		<table border="1">
			<thead>
				<tr>
					<th>ID</th>
					<th>Group Name</th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>
			<c:forEach var="gr" items="${listGroup}">
				<tr>
					<td>${gr.id}</td>
					<td>${gr.name}</td>
					<td>${gr.des}</td>
				</tr>
			</c:forEach>
			</tbody>
		</table>
		<a href="ReAddGroup">
			<input type="submit" name="AddGroup" value="" />
		</a>
		<a href="ReListContact">
			<input type="submit" name="ListContact" value="" />
		</a>
		
	</body>
</html>
