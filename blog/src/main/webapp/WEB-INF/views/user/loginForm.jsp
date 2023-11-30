<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ include file="../layout/header.jsp"%>

<div class="container">
	<form action="/auth/loginProc" method="post">
		<div class="mb-3 mt-3">
			<label for="username" name="username" class="form-label">Username</label> <input type="text" class="form-control" id="username" placeholder="Enter Username" name="username">
		</div>
		<div class="mb-3">
			<label for="password"  name="password" class="form-label">Password</label> <input type="password" class="form-control" id="password" placeholder="Enter password" name="password">
		</div>
		<button id="btn-login" class="btn btn-primary">로그인</button>
	</form>
	
</div>

<%@ include file="../layout/footer.jsp"%>