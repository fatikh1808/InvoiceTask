import React from 'react';
import Button from '@material-ui/core/Button';

const LogoutBtn = (props) => {

    const {isAuthenticated, logout} = props;

    if (isAuthenticated){
        return (
            <Button color="secondary" onClick={logout}>Log out</Button>
        );
    } else {
        return null
    }
}

export default LogoutBtn;