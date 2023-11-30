package com.cos.blog.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class BoardController {

	//@AuthenticationPrincipal PrincipalDetail principal
	
	@GetMapping({"","/"})
	public String index() {
		return "index";
	}
	
	@GetMapping("/board/saveForm")
	public String saveForm() {
		return "board/saveForm";
	}
}
