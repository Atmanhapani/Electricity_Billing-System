package com.example.fsdproject.service;

import com.example.fsdproject.entity.Bill;
import com.example.fsdproject.repository.BillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BillService {

    @Autowired
    private BillRepository billRepository;

    public void addBill(Bill bill) {
        billRepository.save(bill);
    }

    public List<Bill> getBillsByUsername(String username) {
        // Implement the logic to retrieve bills for the provided username from the repository
        // For example:
        return billRepository.findByCustomerUsername(username);
    }
    public void saveBill(Bill bill)
    {
        billRepository.save(bill);
    }

}
