<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%-- 
    Document   : addUserRole
    Created on : Nov 9, 2018, 8:31:24 PM
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
		<h1 style="color: red">ĐM Java WEB ${size}</h1>
		<form action="/WS2UserRoleDB/UserRole/Add">
			<p> Select an user <select name="username" onchange="this.form.submit()">
					<c:forEach var="u" items="${users}">
						<option value="${u.username}" ${param.username == u.username ? "selected":""}>
							${u.username}
						</option>
					</c:forEach>
				</select>
			<p> Select available role <select name="role">
					<c:forEach var="x" items="${roles}">
						<option value="${x.id}">${x.name}</option>
					</c:forEach>
				</select>
				<input type="submit" name="save" value="Save" />
			<h1>List of all username ${username}</h1>
			<c:if test="${assignedRoles}">
				<h1>Nothing to say</h1>
			</c:if>
				<c:if test="${empty assignedRoles}">
					<table border="1" cellspacing="0">
						<tr>
							<th>Role ID </th>
							<th>Role Name </th>
							<th>Feature </th>
						</tr>
						<c:forEach var="x" items="${assingedRoles}">
							<tr>
								<td> ${x.id}</td>
								<td>${x.name}</td>
								<td>
									<ul>
										<c:forEach var="f" items="${x.features}">
											<li>${f.url}</li>
											</c:forEach>
									</ul>
								</td>
							</tr>
					</c:forEach>
				</table>
				</c:if>

		</form>
	</body>
</html>
