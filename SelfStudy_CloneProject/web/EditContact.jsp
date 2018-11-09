<%-- 
    Document   : EditContact
    Created on : Nov 9, 2018, 4:22:28 PM
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
		<h1>Edit a contact</h1>
		ID: <input type="text" name="id" value="" /> <br>
		First Name:  <input type="text" name="fir" value="" /> <br>
		Last Name: <input type="text" name="last" value="" /> <br>
		Group: <select name="GroupConTact">
			<option value="1">Family - Nhom gia dinh</option>
			<option value="2">Colleague - Nhom dong nghiep</option>
			<option value="3">Friend - Nhom ban than</option>
		</select> <br>
		Phone Number:  <input type="text" name="phone" value="" /><br>
		<input type="submit" value="EditContact" />
		<a href="ReContactList">
			<input type="text" name="ReContactList" value="" />
		</a>
		
	</body>
</html>
