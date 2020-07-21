export const initState = {
    user: {},
}

const user_setUser = 'user_setUser';

export const setUserAction = res => {
    return {
        type: user_setUser,
        payload: res,
    }
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case user_setUser: {
            return {
                ...state,
                user: action.payload,
            };
        }

        default: {
            return {
                ...state,
            };
        }
    }
}

export default reducer;