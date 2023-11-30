package com.cos.blog.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cos.blog.model.User;
import java.util.List;
import java.util.Optional;


//DAO
//자동으로 bean 등록이 된다.
//@Repository 생략가능
public interface UserRepository extends JpaRepository<User,Integer> {
//	User findByUsernameAndPassword(String username,String password);
	//SELECT * FROM user WHERE username=1?;
	Optional<User> findByUsername(String username);
}
