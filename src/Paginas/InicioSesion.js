import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PiePagina from "../components/PiePagina";
import FondoImg from "../Imagenes/FondoInicio.png";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import Routes from "../router/routes";
import { useAuth } from '../providers/Auth';
import { translateMessage } from '../utils/translateMessage';
import API from '../data';
import Cookies from 'js-cookie';
import ErrorList from '../components/ErrorList';
import { message } from 'antd';

const useStyles = makeStyles((theme) => ({
    imagen:{
        backgroundImage: `url(${FondoImg})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
    },
    paper: {
        paddingTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },

    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),

    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        color: "#FFFFFF",
        backgroundColor:"#292F36",
        '&:hover':{
            color:"#292F36",
            backgroundColor:"#FFFFFF",
        },
    },

    links:{
        color: "#292F36",
        fontWeight:'bold',
    },
}));
function InicioSesion() {
    const [notes, setNotes]= useState([]);
    return (
        <div className={classes.imagen}>
            <div className='login'>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <a href={Routes.HOME}><MenuBookIcon style={{ color: "#292F36"}} fontSize="large"/></a>
                        <Typography component="h1" variant="h5">
                            Iniciar Sesión
                        </Typography>
                        <form className={classes.form}

                              onSubmit={handleSubmit}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={email}
                                placeholder='email'
                                onChange={(event)=> setUsername(event.target.value)}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Contraseña"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Recordar contraseña"
                            />
                            <Button
                                onSubmit={onFinish}
                                type="submit"
                                fullWidth
                                variant="contained"
                                className={classes.submit}
                            >
                                Inciar Sesión
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2" className={classes.links}>
                                        Haz olvidado tú contraseña?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href={Routes.REGISTROADMIN} variant="body2" className={classes.links}>
                                        {"No tienes una cuenta? Registrate."}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>

                </Container>
            </div>
            <div style={{backgroundColor: "#292F36",height:160}}>
                <PiePagina/>
            </div>
        </div>
    );
}

export default InicioSesion;