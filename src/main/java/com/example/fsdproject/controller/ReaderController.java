
package com.example.fsdproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import com.example.fsdproject.entity.*;
import com.example.fsdproject.service.*;


import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

@Controller
public class ReaderController {
	
	@Autowired
	ReaderService rs;
	
	@GetMapping("/addReader")
	public String addReader()
	{
		return "addReader";
	}
	
	@PostMapping("/add/reader")
	public String registerReader(@RequestParam(value = "firstName", required = true) String firstName, 
			@RequestParam(value = "lastName", required = true) String lastName,
			@RequestParam(value = "email", required = true) String email,
			@RequestParam(value = "phoneNumber", required = true) String phoneNumber,
			@RequestParam(value = "address", required = true) String address,
			@RequestParam(value = "city", required = true) String city,
			@RequestParam(value = "state", required = true) String state,
			@RequestParam(value = "username", required = true) String username, 
			@RequestParam(value = "password", required = true) String password, 
			ModelMap ReaderModel)
	{
		Reader reader = new Reader();
		reader.setFirstName(firstName);
		reader.setLastName(lastName);
		reader.setUsername(username);
		reader.setPassword(password);
		reader.setCity(city);
		reader.setAddress(address);
		reader.setState(state);
		reader.setPhoneNumber(phoneNumber);
		reader.setEmail(email);
		rs.addReader(reader);
		ReaderModel.addAttribute("msg", "Reader Added Successfully!");
		return "redirect:/loginReader";
	}


	@PostMapping("/login/reader")
	public ResponseEntity<String> Login(@RequestBody Reader reader)
	{
		System.out.println("cpass: "+reader.getPassword()+"uname: "+reader.getUsername());
		Reader c = rs.findByUsername(reader.getUsername());
		System.out.println("ccccpass: "+c.getPassword()+" cuname: "+c.getUsername());


		if (c.getPassword().equals(reader.getPassword())) {
			// Passwords match, return 200
			System.out.println("Login successful for username: " + reader.getUsername());
			return ResponseEntity.ok("Login successful");
		}
		else {
			// Passwords don't match, return 401
			System.out.println("Incorrect password for username: " + reader.getUsername());
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Incorrect username or password");
		}



	}
	@GetMapping("/addMeterData")
	public String addMeterData()
	{
		return "meterDataForm";
	}
	
	
}
