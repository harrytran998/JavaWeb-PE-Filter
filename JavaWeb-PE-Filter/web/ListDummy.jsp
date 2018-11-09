<%-- 
    Document   : ListDummy
    Created on : Nov 9, 2018, 9:20:07 AM
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
		<table border="1">
			<thead>
				<tr>
					<th>DummyID</th>
					<th>DummyName</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td></td>
					<td></td>
					<td><a href="/edit/?id=${dummy.id}"></a></td>
					<td><a href="/detail/?id=${dummy.id}"></a></td>
				</tr>
				<tr>
			</tbody>
		</table>
		<a href="/ReAddDummy">
			<input type="button" value="Add" name="Add" />
		</a>
		<a href="/ReDetailDummy">
			<input type="button" value="Detail" name="Detail" />
		</a>
		<a href="/ReEditDummy">
			<input type="button" value="Edit" name="Edit" />
		</a>
		<a href="/ReRemoveDummy">
			<input type="button" value="Remove" name="Remove" />
		</a>
	</body>
</html>
