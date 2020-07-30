package sc.video.chat.service;

import sc.video.chat.dto.User;

public interface UserService {
	public User selectByUserId(String userId);
	
	public int insert(User user);
}
