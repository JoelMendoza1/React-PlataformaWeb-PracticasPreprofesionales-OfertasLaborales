import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import PersonIcon from '@material-ui/icons/Person';
import BusinessIcon from '@material-ui/icons/Business';
import SchoolIcon from '@material-ui/icons/School';
import HomeIcon from '@material-ui/icons/Home';
const useStyles = makeStyles((theme) => ({
    root: {
        width: 360,
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        minHeight: '100vh',
        backgroundImage: 'radial-gradient(circle at 27.08% 47.99%, #707aa9 0, #556599 50%, #385089 100%)',
    },
}));

export default function ListAdmin() {
    const classes = useStyles();

    return (
        <List component="nav" className={classes.root} aria-label="mailbox folders">
            <ListItem button href='/dashboardAdmin/Perfil'>
                <HomeIcon/>
                <ListItemText primary="Home" />
            </ListItem>
            <Divider />
            <a href='/dashboardAdmin/Perfil'>
            <ListItem button >
                <PersonIcon/>
                <ListItemText primary="Perfil" />
            </ListItem>
            </a>
            <Divider />
            <ListItem button divider href='/dashboardAdmin/Perfil'>
                <BusinessIcon/>
                <ListItemText primary="Empresa" />
            </ListItem>
            <ListItem button href='/dashboardAdmin/Perfil'>
                <SchoolIcon/>
                <ListItemText primary="Pasante" />
            </ListItem>

        </List>
    );
}
