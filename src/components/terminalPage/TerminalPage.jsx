import React, {useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import useStyles from "../utils/UseStyles";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';

const TerminalPage = (props) => {

    const {addTerminal, deleteItem, terminalItems} = props;
    const classes = useStyles();
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [enable, setEnable] = React.useState(true);

    useEffect(() => {
        if (name !== '') {
            setEnable(false)
        }
    }, [name]);

    const onSubmit = () => {
        addTerminal(name, description)
        setName('')
        setDescription('')
        setEnable(true)
    }

    const filterTerminal = (id) => {
        deleteItem(terminalItems.filter(item => item.id !== id))
    }

    return (
        <form className={classes.terminal} noValidate autoComplete="off">
            <div>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Name"
                    multiline
                    rowsMax={4}
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    variant="outlined"
                />
            </div>
            <div>
                <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={4}
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    variant="outlined"
                />
            </div>
            <Button variant="contained" color="primary" onClick={onSubmit} disabled={enable}>
                Primary
            </Button>
            <List className={classes.rootT}>
                {terminalItems.map((item) => (
                    <ListItem alignItems="flex-start" key={item.id}>
                        <IconButton aria-label="delete" className={classes.margin}
                                    onClick={() => filterTerminal(item.id)}>
                            <DeleteIcon fontSize="small"/>
                        </IconButton>
                        <ListItemText
                            primary={item.name}
                            secondary={
                                <React.Fragment>
                                    {item.description}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                ))}
            </List>
        </form>
    );
}

export default TerminalPage;