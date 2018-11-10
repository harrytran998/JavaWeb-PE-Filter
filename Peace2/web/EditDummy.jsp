<%-- 
    Document   : EditDummy
    Created on : Nov 10, 2018, 1:25:52 AM
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
		<h1>Edit Dummy</h1>
		<table border="1" cellspacing="0">
			<thead>
				<tr>
					<th>Dummy ID</th>
					<th>Dummy Name</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
			<c:forEach var="dum" items="${listDummies}">
				<tr>
					<td>${dum.id}</td>
					<td>${dum.name}</td>
					<td>
						<a href="DummyEditServlet?id=${dum.id}">Edit</a>
						<a href="DummyRemoveServlet?id=${dum.id}">Remove</a>
					</td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
</body>
</html>
