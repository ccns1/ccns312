import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { setUserAction, setIsSignInAction } from '../modules/user';
import axios from '../api/axios';

const signIn = () => {
    const history = useHistory();

    const dispatch = useDispatch();
    const reduxUser = useSelector((state) => state.user.user);

    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');

    const onUserId = (e) => {
        setUserId(e.target.value);
    };

    const onUserPw = (e) => {
        setUserPw(e.target.value);
    };

    const onSignUp = () => {
        history.push('/user/signUp');
    };

    const onSignIn = () => {
        axios
            .get('/user/selectByUserId', {
                params: {
                    userId,
                },
            })
            .then((res) => {
                const user = res.data.data;
                if (user.userPw === userPw) {
                    dispatch(setUserAction(user));
                    dispatch(setIsSignInAction());
                    alert('로그인 성공');
                    history.push('/main');
                } else {
                    alert('로그인 실패');
                }
            })
            .catch((e) => {
                alert(e);
            });
    };

    const onSignInEnter = (e) => {
        if (e.key === 'Enter') {
            onSignIn();
        }
    };

    return (
        <>
            <div>
                <h1>SCVC Login</h1>
                <span>ID : </span>
                <input type="text" onChange={onUserId} onKeyPress={onSignInEnter} /> <br />
                <span>PW : </span>
                <input type="password" onChange={onUserPw} onKeyPress={onSignInEnter} /> <br />
                <input type="button" value="SignIn" onClick={onSignIn} />
                <input type="button" value="SignUp" onClick={onSignUp} />
                <input type="button" value="Search" />
                {reduxUser.userId}
            </div>
        </>
    );
};

export default signIn;
