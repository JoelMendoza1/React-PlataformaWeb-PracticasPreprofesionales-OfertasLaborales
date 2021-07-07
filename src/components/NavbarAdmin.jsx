import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Routes from "../router/routes";
import Box from '@material-ui/core/Box';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Avatar from '@material-ui/core/Avatar';
import Grid from "@material-ui/core/Grid";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
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
        backgroundColor: "#1E1E2F",
    },
    icons:{
        color:"#ffffff"
    },
    avatar: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    notificaciones: {
        '& > *': {
            margin: theme.spacing(1),
        },
    }
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
export default function NavbarAdmin(props) {
    const classes = useStyles();
    return (
        <div>
            <HideOnScroll {...props}>
                <AppBar position="static" style={{backgroundColor: "#1E1E2F"}} >
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" >
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            <a href="/"><MenuBookIcon className={classes.icons} fontSize="large" /></a>

                        </Typography>
                        <PopupState variant="popover" popupId="demo-popup-popover">
                            {(popupState1) => (
                                <div>
                                    <Badge badgeContent={6} color="primary">
                                        <NotificationsIcon {...bindTrigger(popupState1)}/>
                                    </Badge>

                                    <Popover
                                        {...bindPopover(popupState1)}
                                        anchorOrigin={{
                                            vertical: 'bottom',

                                        }}
                                        transformOrigin={{
                                            vertical: 'top',

                                        }}
                                    >
                                        <Box p={6}>
                                            <div>
                                                <Grid container>
                                                    <Grid item>
                                                        <div className={classes.avatar}>
                                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"  sizes="small"/>
                                                        </div>
                                                    </Grid>
                                                    <Grid item >
                                                        <Typography align="right">Notificacion 1</Typography>
                                                    </Grid>
                                                </Grid>
                                            </div>
                                            <div>
                                                <Grid container>
                                                    <Grid item>
                                                        <div className={classes.avatar}>
                                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"  sizes="small"/>
                                                        </div>
                                                    </Grid>
                                                    <Grid item >
                                                        <Typography align="right">Notificacion 2</Typography>
                                                    </Grid>
                                                </Grid>
                                            </div>
                                            <div>
                                                <Grid container>
                                                    <Grid item>
                                                        <div className={classes.avatar}>
                                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"  sizes="small"/>
                                                        </div>
                                                    </Grid>
                                                    <Grid item >
                                                        <Typography align="right">Notificacion 3</Typography>
                                                    </Grid>
                                                </Grid>
                                            </div>
                                            <div>
                                                <Grid container>
                                                    <Grid item>
                                                        <div className={classes.avatar}>
                                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"  sizes="small"/>
                                                        </div>
                                                    </Grid>
                                                    <Grid item >
                                                        <Typography align="right">Notificacion 4</Typography>
                                                    </Grid>
                                                </Grid>
                                            </div>
                                        </Box>
                                    </Popover>
                                </div>
                            )}
                        </PopupState>

                        <div className={classes.avatar}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </div>
                        <div>
                            <PopupState variant="popover" popupId="demo-popup-popover">
                                {(popupState) => (
                                    <div>
                                        <IconButton color="primary" aria-label="upload picture" component="span">
                                            <ArrowDropDownIcon className={classes.icons} {...bindTrigger(popupState)}/>
                                        </IconButton>
                                        <Popover
                                            {...bindPopover(popupState)}
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'center',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'center',
                                            }}
                                        >
                                            <Box p={3}>
                                                <Grid container>
                                                    <Grid item>
                                                        <div className={classes.avatar}>
                                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"  sizes="small"/>
                                                        </div>
                                                    </Grid>
                                                    <Grid item >
                                                        <Typography>Joel Mendoza</Typography>
                                                    </Grid>
                                                </Grid>
                                                <div>
                                                    <Grid container>
                                                        <Grid item>
                                                            <a href={Routes.INICIOSESIONADMIN}><ExitToAppIcon/></a>

                                                        </Grid>
                                                        <Grid item >
                                                            <Typography>Cerrar Sesión</Typography>
                                                        </Grid>
                                                    </Grid>
                                                </div>

                                            </Box>
                                        </Popover>
                                    </div>
                                )}
                            </PopupState>
                        </div>

                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </div>
    );
};