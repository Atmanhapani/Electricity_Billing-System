package com.example.fsdproject.controller;

import com.example.fsdproject.entity.Bill;
import com.example.fsdproject.entity.Customer;
import com.example.fsdproject.service.BillService;
import com.example.fsdproject.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
public class BillController {
    @Autowired
    private BillService billService;

    @Autowired
    private CustomerService customerService;

    @GetMapping("/getbills")
    public List<Bill> getBillsByUsername(@RequestParam String token) {
        return billService.getBillsByUsername(token);

    }

    @PostMapping("/pay")
    public String pay(@RequestBody Bill bill)
    {
        System.out.println("billl "+bill.getCustomer().getUsername());
//        Customer c=new Customer();
//        c=bill.getCustomer();
//        bill.setCustomer(c);
        bill.setStatus(true);
        billService.saveBill(bill);
        return "Payment done";
    }



    @PostMapping("/addbill")
    public ResponseEntity<?> addCustomer(@RequestBody TempBill tbill) {

        System.out.println("Req got with "+tbill.getUserId());

        Customer c=customerService.findById(tbill.getUserId());

        if(c!=null){
            System.out.println("inside if");
            Bill bill=new Bill();
            bill.setCustomer(c);
            bill.setStatus(false);
            bill.setAmount(tbill.getBillingAmount());


            billService.addBill(bill);

            Map<String, Object> response = new HashMap<>();
            response.put("message", "Bill added successfully");
            response.put("customer", c);
            return ResponseEntity.ok(response);
        }
        else{
            System.out.println("inside else");

            String errorMessage = "Customer is Not Found";
            return ResponseEntity.badRequest().body(errorMessage);
        }

    }

    static class TempBill
    {
        private long userId;

        private long billingAmount;

        public long getUserId() {
            return userId;
        }

        public void setUserId(long userId) {
            this.userId = userId;
        }

        public long getBillingAmount() {
            return billingAmount;
        }

        public void setBillingAmount(long billingAmount) {
            this.billingAmount = billingAmount;
        }
    }


}
