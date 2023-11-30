let index = {
	init: function() {
		$("#btn-save").on('click', () => { //this를 바인딩하기 위해 화살표함수 사용
			this.save();
		});
		/*$("#btn-login").on('click', () => { //this를 바인딩하기 위해 화살표함수 사용
			this.login();
		});*/
	},
	save: function() {
		let data={
			title: $("#title").val(),
			content:$("#content").val(),
		}
		

		$.ajax({
			type:"POST",
			url:"/api/board",
			data:JSON.stringify(data), //http body데이터
			contentType:"application/json; charset=utf-8",
			dataType:"json" //요청을 서버로해서 응답이 왔을 때 기본적으로 모든 것이 문자열(생긴게 json이라면)=>javascript오브젝트로변경
		}).done(function(resp){
			alert("글쓰기가 완료되었습니다.")
			location.href="/";
		}).fail(function(error){
			alert(JSON.stringify(error));
		});
	},
	
}

index.init();