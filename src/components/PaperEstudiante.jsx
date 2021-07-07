import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";
import Paper1 from "../Imagenes/Paper1.png";
import Paper2 from "../Imagenes/Paper2.png";
import Paper3 from "../Imagenes/Paper3.png";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: "#292F36",
    },
}));
export default function PaperEstudiante(props) {
    const classes = useStyles();

    return (
        <Grid container spacing={3}>
            <Grid item xs={4}>
                <Paper className={classes.paper}>
                    <div style={{
                        backgroundImage: `url(${Paper1})`,
                        height: 250

                    }}>
                        <h1>1</h1>
                        <h1>LLENA EL FORMULARIO DE REGISTRO</h1>
                    </div>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper className={classes.paper}>
                    <div style={{
                        backgroundImage: `url(${Paper2})`,
                        height: 250
                    }}>
                        <h1>2</h1>
                        <h1>COMPLETA TU PERFIL PROFESIONAL</h1>
                    </div>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper className={classes.paper}>
                    <div style={{
                        backgroundImage: `url(${Paper3})`,
                        height: 250
                    }}>
                        <h1>3</h1>
                        <h1>RECIBE EN TU INICIO LAS MEJORES OFERTAS</h1>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    );
}