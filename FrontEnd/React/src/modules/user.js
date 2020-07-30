export const initState = {
    user: {},
    isSignIn: false,
};

const userSetUser = 'userSetUser';
const userSetIsSignIn = 'userSetIsSignIn';

export const setUserAction = (res) => {
    return {
        type: userSetUser,
        payload: res,
    };
};

export const setIsSignInAction = () => {
    return {
        type: userSetIsSignIn,
    };
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case userSetUser: {
            return {
                ...state,
                user: action.payload,
            };
        }

        case userSetIsSignIn: {
            return {
                ...state,
                isSignIn: true,
            };
        }

        default: {
            return {
                ...state,
            };
        }
    }
};

export default reducer;
