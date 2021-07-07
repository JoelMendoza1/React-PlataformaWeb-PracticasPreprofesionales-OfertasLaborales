import React from 'react';
import PopupState, {bindPopover, bindTrigger} from "material-ui-popup-state";
import IconButton from "@material-ui/core/IconButton";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Popover from "@material-ui/core/Popover";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Routes from "../router/routes";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles((theme)=>({

}));
function CerrarSesion() {
    const classes = useStyles();
    return (
        <div>
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
        </div>
    );
}

export default CerrarSesion;