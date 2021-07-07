import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PiePagina from "../components/PiePagina";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Routes from "../router/routes";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    imagen:{
        backgroundImage: `url(https://professor-falken.com/wp-content/uploads/2017/11/Como-cambiar-la-imagen-de-fondo-del-inicio-de-sesion-en-tu-Mac-professor-falken.com_.jpg)`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
    },
    paper: {
        paddingTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
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

    empresa:{
        width: 35,
        color: "#FFFFFF",
        backgroundColor:"#292F36",
        '&:hover':{
            color:"#292F36",
        },
    },
    links:{
        color: "#ffffff",
        fontWeight:'bold',
        '&:hover':{
            color:"#292F36",
        },
    },
}));
function RegistarPasante() {
    const classes = useStyles();
    return (
        <div className={classes.imagen}>
            <div>
                <Grid container>
                    <Grid item xs>
                        <Typography component="h5" variant="h6" align="right">
                            Registrar Empresa
                        </Typography>
                    </Grid>
                    <Grid item>
                        <IconButton aria-label="upload picture" component="span" className={classes.empresa} size="small">
                            <a href={Routes.REGISTROEMPRESA}><ArrowForwardIosIcon className={classes.links}/></a>
                        </IconButton>
                    </Grid>
                </Grid>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <a href={Routes.HOME}><MenuBookIcon style={{ color: "#292F36"}} fontSize="large"/></a>
                        <Typography component="h1" variant="h5">
                            Registrarse
                        </Typography>
                        <form className={classes.form} noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="fname"
                                        name="firstName"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="Nombre"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Apellido"
                                        name="lastName"
                                        autoComplete="lname"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email"
                                        name="email"
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Contraseña"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                className={classes.submit}
                            >
                                Registrate
                            </Button>
                            <Grid container justify="flex-end">
                                <Grid item>
                                    <Link href={Routes.INICIOSESIONPASANTE} variant="body2" className={classes.links}>
                                        Ya tienes una cuenta? Inciar Sesión
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </Container>
            </div>
            <div style={{backgroundColor: "#292F36",height:160}}>
                <PiePagina/>
            </div>
        </div>
    );
}

export default RegistarPasante;