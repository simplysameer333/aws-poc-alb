package com.employee.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api")
@RestController
@CrossOrigin
public class Home {
	
	@GetMapping("/home")
	public String home() {
		//return "Application Server - 1";
		return "Application Server - 2";
	}	
}