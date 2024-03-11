package com.example.fsdproject.repository;

import com.example.fsdproject.entity.Bill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BillRepository extends JpaRepository<Bill, Long> {

        List<Bill> findByCustomerUsername(String username);

}
