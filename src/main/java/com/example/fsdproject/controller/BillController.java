package com.example.fsdproject.controller;

import com.example.fsdproject.entity.Bill;
import com.example.fsdproject.entity.Customer;
import com.example.fsdproject.service.BillService;
import com.example.fsdproject.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


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
    public String addCustomer(@RequestBody TempBill tbill) {

        System.out.println("Req got with "+tbill.getUserId());

        Customer c=customerService.findById(tbill.getUserId());

        Bill bill=new Bill();
        bill.setCustomer(c);
        bill.setStatus(false);
        bill.setAmount(tbill.getBillingAmount());



        billService.addBill(bill);


        String str = "Bill added succesfully";

        return str;
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
