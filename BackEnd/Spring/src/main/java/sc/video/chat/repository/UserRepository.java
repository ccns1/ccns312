package sc.video.chat.repository;

import sc.video.chat.dto.User;

public interface UserRepository {
	public User selectByUserId(String userId); 
	
	public int insert(User user);
}
