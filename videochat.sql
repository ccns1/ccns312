create database videochat;

use videochat;

set charset utf8;
alter database videochat default character set utf8;
alter table User convert to character set utf8;

create table User (
	user_id varchar(100), -- 사용자 아이디
    user_pw varchar(100), -- 사용자 비밀번호
    user_nm varchar(100), -- 사용자 이름
    user_gd enum('M', 'W'), -- 사용자 성별
    user_age int, -- 사용자 나이
    user_ph varchar(50), -- 사용자 번호
    user_ma varchar(100), -- 사용자 메일
    rgst_tm datetime, -- 등록시간
    updt_tm datetime -- 수정시간
);

select * from User;

drop table User;