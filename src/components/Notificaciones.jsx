import React from 'react';
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PopupState, {bindPopover, bindTrigger} from "material-ui-popup-state";
import Popover from "@material-ui/core/Popover";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=>({

}));
function Notificaciones() {
    const classes = useStyles();
    return (
        <div>
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
        </div>
    );
}

export default Notificaciones;