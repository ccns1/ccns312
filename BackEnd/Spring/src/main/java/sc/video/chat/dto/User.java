package sc.video.chat.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class User {
	private String user_id;
	private String user_pw;
	private String user_nm;
	private String user_gd;
	private int user_age;
	private String user_ph;
	private String user_ma;
	private String rgst_tm;
	private String updt_tm;
}
