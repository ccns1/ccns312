import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserAction } from '../modules/user';
import axios from '../api/axios';

const login = () => {
    const dispatch = useDispatch();
    const saveuser = useSelector((state) => state.user.user);

    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');

    const onUserId = (e) => {
        setUserId(e.target.value);
    };

    const onUserPw = (e) => {
        setUserPw(e.target.value);
    };

    const setUser = () => {
        const user = {
            id: 'abc',
            name: 'person',
            phone: '010-1234-5678',
        };
        dispatch(setUserAction(user));
    };

    const signUp = () => {
        let user = {
            id: '123',
            pw: '456',
            nm: '789',
        };

        axios
            .post('/user/insert', user)
            .then((res) => {
                if (res.data.data == 1) {
                    console.log('회원가입 성공!');
                }
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <>
            <div>
                <h1>SCVC Login</h1>
                <span>ID : </span>
                <input type="text" onChange={onUserId} /> <br />
                <span>PW : </span>
                <input type="password" onChange={onUserPw} /> <br />
                <input type="button" value="SignIn" />
                <input type="button" value="SignUp" />
                <input type="button" value="Search" />
            </div>

            <div>
                <h1>Redux Test</h1>
                <input type="button" value="button" onClick={setUser} />
                <p>나의 이름은 {saveuser.name}</p>
            </div>
        </>
    );
};

export default login;
