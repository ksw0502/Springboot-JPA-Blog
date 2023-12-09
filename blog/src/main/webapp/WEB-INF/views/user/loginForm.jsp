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
		<a href="https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=c28ee9b67f757e77004322703c2b07e0&redirect_uri=http://localhost:8000/auth/kakao/callback"><img height="38px" src="/image/카카오로그인버튼.png"/></a>
	</form>
	
</div>

<%@ include file="../layout/footer.jsp"%>