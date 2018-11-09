<%-- 
    Document   : AddContact
    Created on : Nov 9, 2018, 3:55:29 PM
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
		<h1>Add a Contac</h1>
		First Name: <input type="text" name="first" value="" /> <br>
		Last Name:<input type="text" name="last" value="" /><br>
		Group:<select name="group">
			<option value="1">Family - Nhom gia dinh</option>
			<option value="2">Colleague - Nhom dong nghiep</option>
			<option value="3">Friend - Nhom ban than</option>
		</select> <br>
		Phone Number:<input type="text" name="phone" value="" />
		<input type="submit" value="add" />
		<a href="ReListContact">
			<input type="button" value="Return To Contact List" />
		</a>
		<br>
	</body>
</html>
