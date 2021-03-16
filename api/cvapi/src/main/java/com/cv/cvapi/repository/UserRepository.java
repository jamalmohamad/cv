package com.cv.cvapi.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cv.cvapi.models.User;


@Repository
public interface UserRepository extends JpaRepository<User, Long>{
	
	Optional<User> findByUsername(String username);
	
	Boolean exitsByUsername(String username);
	
	Boolean exitsByEmail(String email);
	

}
