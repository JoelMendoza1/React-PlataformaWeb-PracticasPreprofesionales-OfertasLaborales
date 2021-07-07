import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Title from './Title';
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import PopupState, {bindPopover, bindTrigger} from "material-ui-popup-state";
import IconButton from "@material-ui/core/IconButton";
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import Popover from "@material-ui/core/Popover";
import TextField from "@material-ui/core/TextField";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Button from '@material-ui/core/Button';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        backgroundImage: 'radial-gradient(circle at 27.08% 47.99%, #707aa9 0, #556599 50%, #385089 100%)',
    },
    tabs:{
        backgroundImage: 'radial-gradient(circle at 27.08% 47.99%, #707aa9 0, #556599 50%, #385089 100%)',

    }
}));


export default function Chart() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
            <React.Fragment>
                <Title styles={{color: '#556599'}} >Solicitudes</Title>
                <div className={classes.root}>
                    <AppBar position="static" className={classes.tabs}>
                        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                            <Tab label="Pendientes" {...a11yProps(0)} />
                            <Tab label="Aprobadas" {...a11yProps(1)} />
                            <Tab label="Rechazadas" {...a11yProps(2)} />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0} >
                        <Grid container spacing={3}>
                            <Grid item>
                                <IconButton color="inherit" aria-label="upload picture" component="span">
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton color="inherit" aria-label="upload picture" component="span">
                                <Typography>Joel Mendoza</Typography>
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton color="inherit" aria-label="upload picture" component="span">
                                <ThumbUpIcon/>
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <div>
                                    <PopupState variant="popover" popupId="demo-popup-popover">
                                        {(popupState) => (
                                            <div>
                                                <IconButton color="inherit" aria-label="upload picture" component="span" >
                                                        <ThumbDownIcon {...bindTrigger(popupState)}/>
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
                                                    <Box p={2}>
                                                        <div>
                                                            <TextField
                                                                name="descripcion"
                                                                label="Descripcion"
                                                                type="text"
                                                                id="descripcion"
                                                            />
                                                        </div>
                                                        <br/>
                                                        <div>
                                                            <Button variant="contained" color="primary" >
                                                                Enviar
                                                            </Button>
                                                        </div>

                                                    </Box>
                                                </Popover>
                                            </div>
                                        )}
                                    </PopupState>
                                </div>
                            </Grid>
                            <Grid item>
                                <IconButton color="inherit" aria-label="upload picture" component="span">
                                    <InsertDriveFileIcon/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Grid container spacing={3}>
                            <Grid item>
                                <IconButton color="inherit" aria-label="upload picture" component="span">
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton color="inherit" aria-label="upload picture" component="span">
                                    <Typography>Joel Mendoza</Typography>
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton color="inherit" aria-label="upload picture" component="span">
                                    <ThumbUpIcon/>
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <div>
                                    <PopupState variant="popover" popupId="demo-popup-popover">
                                        {(popupState) => (
                                            <div>
                                                <IconButton color="inherit" aria-label="upload picture" component="span" >
                                                    <ThumbDownIcon {...bindTrigger(popupState)}/>
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
                                                    <Box p={2}>
                                                        <div>
                                                            <TextField
                                                                name="descripcion"
                                                                label="Descripcion"
                                                                type="text"
                                                                id="descripcion"
                                                            />
                                                        </div>
                                                        <br/>
                                                        <div>
                                                            <Button variant="contained" color="primary" >
                                                                Enviar
                                                            </Button>
                                                        </div>

                                                    </Box>
                                                </Popover>
                                            </div>
                                        )}
                                    </PopupState>
                                </div>
                            </Grid>
                            <Grid item>
                                <IconButton color="inherit" aria-label="upload picture" component="span">
                                    <InsertDriveFileIcon/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Grid container spacing={3}>
                            <Grid item>
                                <IconButton color="inherit" aria-label="upload picture" component="span">
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton color="inherit" aria-label="upload picture" component="span">
                                    <Typography>Joel Mendoza</Typography>
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton color="inherit" aria-label="upload picture" component="span">
                                    <ThumbUpIcon/>
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <div>
                                    <PopupState variant="popover" popupId="demo-popup-popover">
                                        {(popupState) => (
                                            <div>
                                                <IconButton color="inherit" aria-label="upload picture" component="span" >
                                                    <ThumbDownIcon {...bindTrigger(popupState)}/>
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
                                                    <Box p={2}>
                                                        <div>
                                                            <TextField
                                                                name="descripcion"
                                                                label="Descripcion"
                                                                type="text"
                                                                id="descripcion"
                                                            />
                                                        </div>
                                                        <br/>
                                                        <div>
                                                            <Button variant="contained" color="primary" >
                                                                Enviar
                                                            </Button>
                                                        </div>

                                                    </Box>
                                                </Popover>
                                            </div>
                                        )}
                                    </PopupState>
                                </div>
                            </Grid>
                            <Grid item>
                                <IconButton color="inherit" aria-label="upload picture" component="span">
                                    <InsertDriveFileIcon/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </TabPanel>
                </div>
            </React.Fragment>

    );
}