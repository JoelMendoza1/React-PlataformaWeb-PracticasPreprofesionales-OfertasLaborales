import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Routes from "../router/routes";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    navbar: {
        backgroundColor: "transparent",
    },
}));
function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

    export default function Navbar(props) {
    const classes = useStyles();
    return (
        <div>
            <HideOnScroll {...props}>
            <AppBar position="static" style={{backgroundColor: "transparent"}} >
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" >
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <a href="/"><MenuBookIcon style={{ color: "#292F36"}} fontSize="large" /></a>

                    </Typography>
                    <Button color="inherit" style={{ color: "#292F36"}} href={Routes.HOME}>HOME</Button>
                    <Button color="inherit" style={{ color: "#292F36"}} href={Routes.ACERCA}>ACERCA</Button>
                    <Button color="inherit" style={{ color: "#292F36"}} href={Routes.EMPRESA}>EMPRESA</Button>
                    <Button color="inherit" style={{ color: "#292F36"}} href={Routes.PASANTE}>PASANTE</Button>
                    <Button color="inherit" style={{ color: "#FFFFFF", backgroundColor:"#292F36"}} href={Routes.INICIOSESIONPASANTE}>INICIAR SESIÓN</Button>

                </Toolbar>
            </AppBar>
            </HideOnScroll>
        </div>
    );
};