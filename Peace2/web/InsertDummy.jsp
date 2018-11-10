<%-- 
    Document   : InsertDummy
    Created on : Nov 10, 2018, 1:26:03 AM
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
		<h1>Add a Dummy</h1>
		<form action="DummyInsertServlet" method="POST">
			Dummy ID: <input type="text" name="dummyID" value="" placeholder="Enter dummy id"/> <br>
			Dummy Name: <input type="text" name="dummyName" value="" placeholder="Enter dummy name"/> <br>
			<input type="submit" value="Add Dummy" />
		</form>
	</body>
</html>
