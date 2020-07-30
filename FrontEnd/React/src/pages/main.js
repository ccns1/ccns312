import React from 'react';
import { useSelector } from 'react-redux';

const main = () => {
    const reduxUser = useSelector((state) => state.user.user);

    return (
        <>
            <div>{reduxUser.userNm}님 안녕하세요. Main Page 입니다~</div>
        </>
    );
};

export default main;
