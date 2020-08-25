import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import useStyles from "../utils/UseStyles";
import Box from "@material-ui/core/Box";
import Footer from "../footer/Footer";
import UserAvatar from "./avatar/Avatar";
import SideBarList from "./list/SideBarList";
import LogoutBtn from './logoutBtn/LogoutBtn';


const SideBar = (props) => {

    const {userAvatar, isAuthenticated, logout} = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.toolbar}/>
                <div style={{placeSelf: "center"}}>
                    <UserAvatar userAvatar={userAvatar} isAuthenticated={isAuthenticated} />
                </div>
                <Divider/>
                <SideBarList isAuthenticated={isAuthenticated}/>
                <Divider/>
                <LogoutBtn logout={logout} isAuthenticated={isAuthenticated}/>
                <Divider/>
                <Box mt={8}>
                    <Footer/>
                </Box>
            </Drawer>
        </div>
    );
}

export default SideBar;