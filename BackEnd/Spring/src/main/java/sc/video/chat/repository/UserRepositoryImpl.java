package sc.video.chat.repository;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import sc.video.chat.dto.User;

@Repository
public class UserRepositoryImpl implements UserRepository {
	
	private String ns = "sc.video.chat.usermapper.";
	
	@Autowired
	SqlSession session;
	
	@Override
	public User selectByUserId(String userId) {
		return session.selectOne(ns + "selectByUserId", userId);
	}
	
	@Override
	public int insert(User user) {
		return session.insert(ns + "insert", user);
	}
}
