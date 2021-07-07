import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/core/styles";
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
const useStyles = makeStyles((theme)=>({
    root: {
        textAlign:"center",
        color: "white",
        margin: theme.spacing(0),

    },
}));

function PiePagina() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <div className={classes.root}>
                        <h3>
                            <EmailIcon style={{ color: "white"}} fontSize="small"/>
                            <label>  wester.mendoza@epn.edu.ec</label>
                        </h3>
                        <h3>
                            <PhoneIcon style={{ color: "white"}} fontSize="small"/>
                            <label>  +593 99 251 4455</label>
                        </h3>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className={classes.root}>
                        <h3>
                            <EmailIcon style={{ color: "white"}} fontSize="small"/>
                            <label>  gabriela.garcia@epn.edu.ec</label>
                        </h3>
                        <h3>
                            <PhoneIcon style={{ color: "white"}} fontSize="small"/>
                            <label>  +593 98 757 1481</label>
                        </h3>
                    </div>
                </Grid>
            </Grid>
            <h3>© 2020</h3>
        </div>
    );
}
export default PiePagina;