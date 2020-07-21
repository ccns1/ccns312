import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserAction } from '../modules/user';

const login = () => {
    const dispatch = useDispatch();
    const saveuser = useSelector(state => state.user.user);
    
    const setUser = () => {
        const user = {
            id: 'abc',
            name: 'person',
            phone: '010-1234-5678',
        }
        dispatch(setUserAction(user));
    }
    
    return (
        <div>
            <h1>Login 페이지 입니다.</h1>
            <input type="button" value="button" onClick={setUser}></input>
            <p>나의 이름은 {saveuser.name}</p>
        </div>
    )
}

export default login;
