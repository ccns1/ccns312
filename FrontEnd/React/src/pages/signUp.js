import React from 'react';
import axios from '../api/axios';

const signUp = () => {
    const userSignUp = () => {
        let user = {
            user_id: '123',
            user_pw: '456',
            user_nm: '789',
            user_gd: 'M',
            user_age: 30,
            user_ph: '010-1234-5678',
            user_ma: 'abc@d.com',
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
            <p>HELLO</p>
            <input type="button" value="signUp" onClick={userSignUp} />
        </>
    );
};

export default signUp;
