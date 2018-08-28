<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>    
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Hall of Fame</title>
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootswatch/4.1.3/minty/bootstrap.min.css" />
</head>
<body>
<div class="container" style="margin: 50px">

	<h1>${index}</h1>

	<br>
	<!-- to dump info from API into page: -->
	<div id="info"></div>

	<script src="script.js"></script> <!-- check webpage console for  console.log-->
	
</div>
</body>
</html>