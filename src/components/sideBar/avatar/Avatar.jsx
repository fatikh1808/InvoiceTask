import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import useStyles from "../../utils/UseStyles";

const UserAvatar = (props) => {

    const {userAvatar, isAuthenticated} = props;
    const classes = useStyles();

    if (isAuthenticated) {
        return <Avatar variant="square" src={userAvatar} className={classes.large}/>
    } else {
        return null
    }
}
 export default UserAvatar;