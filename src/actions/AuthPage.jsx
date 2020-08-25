import * as types from '../constants';

export function getAvatar(username) {
    return (dispatch) => {
        dispatch({
            type: types.LOGIN_SUBMIT_REQUEST,
        });
        return fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(json => {
                const avatar = json.avatar_url;
                if (avatar !== undefined) {
                    return avatar;
                }
                alert('not found')
                throw new Error('не найдено');
            })
            .then(json => {
                localStorage.setItem('token', json);
                dispatch({
                    type: types.LOGIN_SUBMIT_SUCCESS,
                    payload: json
                })

            })
            .catch(reason => dispatch({
                type: types.LOGIN_SUBMIT_FAILURE,
                payload: reason
            }))
    }
}

export function logout() {
    return (dispatch) => {
        dispatch({
            type: types.LOGOUT_SUBMIT_SUCCESS
        });
        return (
            localStorage.removeItem('token')
        )
    };
}