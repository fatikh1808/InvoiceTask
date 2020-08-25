import * as types from '../constants';

const token = localStorage.getItem('token')
const initialState = {
    isAuthenticated: !!token,
    userAvatar: token,
    isCheating: false
}

export default function AuthReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_SUBMIT_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                userAvatar: action.payload,
                isCheating: false
            };
        case types.LOGIN_SUBMIT_FAILURE:
            return {
                isCheating: true
            }
        case types.LOGOUT_SUBMIT_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                userAvatar: null
            };
        default:
            return state
    }
}