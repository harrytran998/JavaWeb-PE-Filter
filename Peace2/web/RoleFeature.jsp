<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%-- 
    Document   : RoleFeature
    Created on : Nov 10, 2018, 1:46:52 AM
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
		<a href="LogoutServlet">
			LogOut
		</a>
		<h1>Hello World ${user.username}</h1> 
		<c:if test="${not empty listRoles}">
			<table  border="1" cellspacing="0">
				<thead>
					<tr>
						<th>Role ID</th>
						<th>Role Name</th>
						<th>Features</th>
					</tr>
				</thead>
				<tbody>
					<c:forEach var="ro" items="${listRoles}">
						<tr>
							<td>${ro.id}</td>
							<td>${ro.name}</td>
							<td>
								<ul>
									<c:forEach var="f" items="${ro.features}">
										<li>
											<c:if test="${f.url eq '/insert'}">
												<a href="InsertDummy.jsp">${f.url}</a>
											</c:if>
											<c:if test="${f.url eq '/edit'}">
												<a href="EditDummy.jsp">${f.url}</a>
											</c:if>
												<c:if test="${f.url eq '/detail'}">
												<a href="DummyServlet">${f.url}</a>
											</c:if>
										</li>
									</c:forEach>
								</ul>
							</td>
						</tr>
					</c:forEach>
				</tbody>
			</table>
		</c:if>
	</body>
</html>
