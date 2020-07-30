import React from 'react';
import { Redirect, Route } from 'react-router'; // Redirect: 페이지 Redirect, Route: path에 알맞은 component 등록
import { BrowserRouter } from 'react-router-dom'; // Route 외부에 덮어져서 Browser 이동을 도움
import { useSelector } from 'react-redux';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import Main from './pages/main';

const App = () => {
    const reduxIsSignIn = useSelector((state) => state.user.isSignIn);

    return (
        <>
            <BrowserRouter>
                {reduxIsSignIn ? <Redirect to="/main" /> : <Redirect to="/user/signIn" />}
                <Route path="/user/signIn" component={SignIn} />
                <Route path="/user/signUp" component={SignUp} />
                <Route path="/main" component={Main} />
            </BrowserRouter>
        </>
    );
};

export default App;
