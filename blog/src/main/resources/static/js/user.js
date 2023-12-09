let index = {
	init: function() {
		$("#btn-save").on('click', () => { //this를 바인딩하기 위해 화살표함수 사용
			this.save();
		});
		$("#btn-update").on('click', () => { //this를 바인딩하기 위해 화살표함수 사용
			this.update();
		});
	},
	save: function() {
		//alert('user의 save함수 호출됨');
		let data={
			username: $("#username").val(),
			password:$("#password").val(),
			email:$("#email").val()
		}
		
		$.ajax({
			type:"POST",
			url:"/auth/joinProc",
			data:JSON.stringify(data), //http body데이터
			contentType:"application/json; charset=utf-8",
			dataType:"json" //요청을 서버로해서 응답이 왔을 때 기본적으로 모든 것이 문자열(생긴게 json이라면)=>javascript오브젝트로변경
		}).done(function(resp){
			if(resp.status===500){
				alert("회원가입에 실패하였습니다.")
			}else{
			alert("회원가입이 완료되었습니다.")
			location.href="/";
			}
		}).fail(function(error){
			alert(JSON.stringify(error));
		});
	},
	
	update: function() {
		//alert('user의 save함수 호출됨');
		let data={
			id: $("#id").val(),
			password:$("#password").val(),
			email:$("#email").val()
		}
		
		$.ajax({
			type:"PUT",
			url:"/user",
			data:JSON.stringify(data), //http body데이터
			contentType:"application/json; charset=utf-8",
			dataType:"json" //요청을 서버로해서 응답이 왔을 때 기본적으로 모든 것이 문자열(생긴게 json이라면)=>javascript오브젝트로변경
		}).done(function(resp){
			alert("회원 수정이 완료되었습니다.")
			location.href="/";
		}).fail(function(error){
			alert(JSON.stringify(error));
		});
	},
	
}

index.init();