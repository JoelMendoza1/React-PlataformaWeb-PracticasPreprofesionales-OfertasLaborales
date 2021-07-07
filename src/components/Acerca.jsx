import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Routes from "../router/routes";

const useStyles = makeStyles((theme)=>({
    root: {
        minWidth: 275,
        width: 540,
        margin: 'auto',
        padding:80,
        backgroundColor: "#292F36",
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "center",
    },
    pos: {
        marginBottom: 10,
    },
    boton: {
        backgroundColor: "#292F36",
        color: "black",
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: "transparent",
    },
}));

export default function Acerca(props) {
    const classes = useStyles();


    return (
        <div>
            <Card className={classes.root} style={{backgroundColor: "transparent"}}>
                <CardContent>

                    <Typography variant="h1" className={classes.title} color="textSecondary" gutterBottom >
                        Obtener experiencia laboral no está tan lejos, la oportunidad está a tan solo un click de distancia
                    </Typography>
                </CardContent>
                <CardActions>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Button size="small" className={classes.boton} href={Routes.REGISTROPASANTE}>REGISTRATE</Button>
                        </Paper>

                    </Grid>
                </CardActions>
            </Card>
        </div>
    );
}