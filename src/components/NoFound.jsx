import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import Routes from '../router/routes'
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(https://i.pinimg.com/564x/3b/41/94/3b4194bc474e740485887fde4a355014.jpg)`,
        height: 610,
        paddingTop: theme.spacing(2),
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',

    }

    }));
function NoFound() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <p style={{textAlign:"center"}}>
                <Link to={Routes.HOME}>Ir a Página Inicial </Link>
            </p>
        </div>
    );
}

export default NoFound;