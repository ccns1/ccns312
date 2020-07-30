package sc.video.chat.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import sc.video.chat.dto.User;
import sc.video.chat.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserRepository uRepo;
	
	@Override
	public User selectByUserId(String userId) {
		return uRepo.selectByUserId(userId);
	}
	
	@Override
	@Transactional
	public int insert(User user) {
		return uRepo.insert(user);
	}
}
