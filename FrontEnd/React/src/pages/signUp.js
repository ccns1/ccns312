import React, { useState } from 'react';
import { useHistory } from 'react-router';
import axios from '../api/axios';

const signUp = () => {
    const history = useHistory();

    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');
    const [userNm, setUserNm] = useState('');
    const [userGd, setUserGd] = useState('M');
    const [userAge, setUserAge] = useState(0);
    const [userPh, setUserPh] = useState('');
    const [userMa, setUserMa] = useState('');

    const onUserId = (e) => {
        setUserId(e.target.value);
    };

    const onUserPw = (e) => {
        setUserPw(e.target.value);
    };

    const onUserNm = (e) => {
        setUserNm(e.target.value);
    };

    const onUserGd = (e) => {
        setUserGd(e.target.value);
    };

    const onUserAge = (e) => {
        setUserAge(e.target.value);
    };

    const onUserPh = (e) => {
        setUserPh(e.target.value);
    };

    const onUserMa = (e) => {
        setUserMa(e.target.value);
    };

    const userSignUp = () => {
        const user = {
            userId,
            userPw,
            userNm,
            userGd,
            userAge,
            userPh,
            userMa,
        };
        axios
            .post('/user/insert', user)
            .then((res) => {
                if (res.data.data === 1) {
                    alert('회원가입 성공');
                    history.push('/user/signIn');
                }
            })
            .catch((e) => {
                alert(e);
            });
    };

    return (
        <>
            <div>
                <span>아이디 : </span>
                <input type="text" onChange={onUserId} /> <br />
                <span>비밀번호 : </span>
                <input type="password" onChange={onUserPw} /> <br />
                <span>이름 : </span>
                <input type="text" onChange={onUserNm} /> <br />
                <span>성별 : </span>
                <select onChange={onUserGd}>
                    <option value="M">남자</option>
                    <option value="W">여자</option>
                </select>
                <br />
                <span>나이 : </span>
                <input type="number" onChange={onUserAge} /> <br />
                <span>전화번호 : </span>
                <input type="text" onChange={onUserPh} /> <br />
                <span>이메일 : </span>
                <input type="text" onChange={onUserMa} /> <br />
            </div>
            <input type="button" value="signUp" onClick={userSignUp} />
        </>
    );
};

export default signUp;
