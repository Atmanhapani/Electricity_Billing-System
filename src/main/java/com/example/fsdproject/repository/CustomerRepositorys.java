package com.example.fsdproject.repository;


import com.example.fsdproject.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepositorys extends JpaRepository<Customer, Long> {
    Customer findByUsername(String username);
}
