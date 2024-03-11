package com.example.fsdproject.controller;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import com.example.fsdproject.entity.*;
import com.example.fsdproject.service.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

@RestController
public class CustomerController {
	
	@Autowired
	private CustomerService cs;

	


	@PostMapping("/register")
	public String addCustomer(@RequestBody Customer customer) {

		System.out.println("Req got with "+customer.getFirstName());

		cs.addCustomer(customer);
		String str = "Customer added succesfully";

		return str;
	}
	

	@PostMapping("/login/customer")
	public ResponseEntity<String> Login(@RequestBody Customer customer)
	{
		System.out.println("cpass: "+customer.getPassword()+"uname: "+customer.getUsername());
		Customer c = cs.findByUsername(customer.getUsername());
		System.out.println("ccccpass: "+c.getPassword()+" cuname: "+c.getUsername());


			if (c.getPassword().equals(customer.getPassword())) {
				// Passwords match, return 200
				System.out.println("Login successful for username: " + customer.getUsername());
				String token = customer.getUsername();

				return ResponseEntity.ok(token);
			}
			else {
				// Passwords don't match, return 401
				System.out.println("Incorrect password for username: " + customer.getUsername());
				return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Incorrect username or password");
			}



	}
	
	@GetMapping("/customers")
	public String getCustomers(ModelMap CustomerModel) {
		List<Customer> Customers = cs.getCustomers();
		CustomerModel.addAttribute("customers", Customers);
		return "customers";
	}
	
	@GetMapping("update/customer/{id}")
	public String updatePage(@PathVariable("id") int id, ModelMap customerModel) {
		customerModel.addAttribute("id", id);
		Customer customer = cs.getCustomer(id);
		customerModel.addAttribute("customer", customer);
		return "update";
	}



	@GetMapping("/delete/customer/{id}")
	public String deletecustomer(@PathVariable int id, ModelMap customerModel) {
		cs.deleteCustomer(id);
		List<Customer> customers = cs.getCustomers();
		customerModel.addAttribute("customers", customers);
		customerModel.addAttribute("msg", "customer delted successfully");
		return "redirect:/customers";
	}
	
	@GetMapping("/customer/{id}")
	public String detailsOfCustomer(@PathVariable int id, ModelMap detailModel)
	{
		Customer c = cs.getCustomer(id);
		System.out.println(c);
		detailModel.addAttribute("msg", "Detail of the Customer are : ");
		detailModel.addAttribute("detail", c);
		return "customer";
		
	}
	
	@GetMapping("/logout")
	public String logoutCustomer(HttpServletRequest request, ModelMap messages) {
		messages.addAttribute("msg", "Logout Successfully");
		HttpSession session = request.getSession(false);
		if (session != null) {
			session.invalidate();
		}
		return "Home";
	}
	@GetMapping("/pay")
	public String pay(HttpServletRequest request)
	{
		HttpSession session = request.getSession(false);
		ModelMap details = new ModelMap();
		if(session == null)
		{
			System.out.println("Session null");
			System.out.println("Session null");
			System.out.println("Session null");
			System.out.println("Session null");
			System.out.println("Session null");
			System.out.println("Session null");
			System.out.println("Session null");
			System.out.println("Session null");
			System.out.println("Session null");
		}
		if(session != null)
		{
			Customer customer = cs.findByUsername((String) session.getAttribute("username"));
			details.addAttribute("msg", customer);
		}
		else
		{
			return "redirect:/login";
		}
		return "billing_form";
	}

	@PostMapping("/add/meter")
	public String associateMeterWithCustomer(@RequestParam(value = "username", required = true) String username, @RequestParam(value = "meter_number", required = true) int meter_number)
	{
		System.out.println(username);
		Customer c = cs.findByUsername(username);
		Meter meter = new Meter();
		meter.setMeter_number(meter_number);
		List<Meter> meters = c.getMeters();
		meters.add(meter);
		c.setMeters(meters);
		cs.updateCustomer(c);
		return "redirect:/";
	}
	
	@GetMapping("/renderProfile")
	public String renderProfile(HttpServletRequest request, ModelMap model)
	{
		HttpSession session = request.getSession(false);
		String username = (String)session.getAttribute("username");
		Customer c = cs.findByUsername(username);
		
		List<Meter> meters = c.getMeters();
		if(meters == null)
		{
			return "redirect:/";
		}
		session.setAttribute("found_list", true);
		model.addAttribute("list", meters);
		return "profilePage";
	}
	
	@GetMapping("/payment")
	public String payment(ModelMap messages)
	{
		messages.addAttribute("msg", "Payment Successful");
		return "Home";
				
	}
}
