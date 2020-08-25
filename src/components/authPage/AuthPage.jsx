import React, {useEffect, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from "../utils/UseStyles";
import passwordValidator from 'password-validator'
import Tip from './tip/Tip';

const AuthPage = (props) => {

    const {getAvatar, isCheating} = props;

    const schema = new passwordValidator();

    schema
        .is().min(8)                                    // Minimum length 8
        .is().max(100)                                  // Maximum length 100
        .has().uppercase()                              // Must have uppercase letters
        .has().lowercase()                              // Must have lowercase letters
        .has().digits(2)                                // Must have at least 2 digits
        .has().not().spaces()                           // Should not have spaces

    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');
    const [disable, setDisable] = useState(true)

    const onChange = (event) => {
        setPassWord(event.target.value)
    }

    useEffect(() => {
        if (schema.validate(passWord)) {
            setDisable(false)
        } else {
            setDisable(true)
        }
    }, [passWord, schema]);

    const handleSubmit = (e) => {
        e.preventDefault();
        getAvatar(userName);
    }

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="GitHub username"
                        name="email"
                        value={userName}
                        autoFocus
                        onChange={(event => setUserName(event.target.value))}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={event => onChange(event)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={e => handleSubmit(e)}
                        disabled={disable}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link href="https://github.com" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                    <Tip
                        disable={disable}
                        text={'Пароль должен быть не менее 8 символов, ' +
                        'хотя бы 1 прописная латинская буква, хотя бы 1\n' +
                        'цифра.'}/>
                    <Tip
                        disable={isCheating}
                        text={'Не сущесвующий аккаунт GitHub'}/>
                </form>
            </div>
        </Container>
    );
}

export default AuthPage;