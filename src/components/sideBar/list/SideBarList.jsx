import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";

const SideBarList = (props) => {

    function ListItemLink(props) {
        return <ListItem button component="a" {...props} />;
    }

    const {isAuthenticated} = props;

    if (isAuthenticated) {
        return (
            <List>
                <ListItemLink href="terminal">
                    <ListItemIcon><InboxIcon/></ListItemIcon>
                    <ListItemText primary={'Terminal'}/>
                </ListItemLink>
                <ListItemLink href={'/customers'}>
                    <ListItemIcon><InboxIcon/></ListItemIcon>
                    <ListItemText primary={'Customers'}/>
                </ListItemLink>
            </List>
        )
    } else {
        return (
            <div>
                You should authenticate firstly!
            </div>
        )
    }

}
export default SideBarList;