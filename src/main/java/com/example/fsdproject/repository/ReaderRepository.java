package com.example.fsdproject.repository;

import com.example.fsdproject.entity.Customer;
import com.example.fsdproject.entity.Reader;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReaderRepository extends JpaRepository<Reader, Long> {
    Reader findByUsername(String username);
}

