import React from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
    {
        label: 'CNT',
        imgPath:
            'https://datta.com.ec/img/images/275/pcworld/CNT-Logo.jpg',
    },
    {
        label: 'Movistar',
        imgPath:
            'https://cece.ec/wp-content/uploads/2017/10/logo-movistar.png',
    },
    {
        label: 'CobisCorp',
        imgPath:
            'data:image/jpeg;base64,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',
    },
    {
        label: 'Stupendo',
        imgPath:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAACFCAMAAAA0Gy6sAAAAflBMVEX///9FTngJyZaytsi+wtDh4+l0epp9g6F5gJ3p6u/Y2uKDiaWQla+6vs2UmbF3fp1mbZBYg5DLztlYfo+fpLpTW4Jsc5RLopj5+fry8/VYYIZXcolOnpdOVn7T1d9Yh5EVxZhUaIU3tJpXjpOjqLxmbpC1t8lUk5U9r5lLV3ylnQxTAAAFBUlEQVR4nO2abdtjOBiGdYtW0VpLF7PM7K7Ozvz/P7gluSOJIH3omDmO6/wWt5CcJPLCcQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVpC6L9PsXea98A8vc9q7zHsBV/bAlT1wZQ9c2QNX9sCVPXBlD1zZA1f2bOPKi7MojLJjU0gHy6OJmLKwpJgwNSztUbrQM35dunRJ0VS9Mp2dGrPHricXWr6J21fKFdfVXP2u8snGVXFMRKwOL4NAo+mKR2OWvNLZEUu7lA5GOeVnY7pyQNGwT+YifWHxs6MdIPLo4ozwQhGnOmmuflP508KVl6jhkJ7Dzq4Ooa2rJ1HpqByVcLuNq6bW40n5c7gS17JwdXiosiItHG7hqqxG8eNchX6kq6q0d3Xw5V4rG4WjDVzpD2BQtb8ruriVK97OehpDOF3tquQtML/GbtyGtXzL4Mzgb96DpagXsXRVnwUpQ3IlBZ+MXR2aWVf5M9NN9Lb10ArP/FAVtVdqN/cJV/994nz+p+PbtCuXHUp4OYOT9HSmLLzkKhEZCl5BydV9fDPVVVLMubqxG934yaJB0CsddrkLajme2dUflPzcJ79Mu+INO3Vm2NEVe8vnXTnFnavRilbxHiwhlStdXdmhwJlhT1e1t+yKGgf1pFSpjCdblow2chU7M+zp6uBbuKI2R+GTWpSUrrTSFXdexxPzhN1ddb3QkiuHn0p14G2SJkkelWSlq5QO1o8wiy9GY+9zVWUDUjeguKqDZVc5S9OHkHdQNDXlJanWuipyJVSfNCPvdSUjTekUV88ue9FVZXRF9ku6sdHVt784/zKmXVEjHLiP+vlVrqphRSDquVq7osfornQlHtLacXtx08OVLmuVKwkps5WrIx8nV+nHXFFyM1fDWG0ivp+rlN75+8dcbf5edXeO1E5LdIp7uyoeyhnv6a9ec9WV3W2juzCmzXPe5yqPBsbfwVSbI3/0O8hdTXwHX3bFaBLjCe9zNT++SsVQeckV79i08RW9qZZjBiPTexONsQpmV3xiES24kpYSPuCqkFfXJl3xDkm4uqlFEbXa1BUfACfqQbOrVC0vPUwxCx+Nr2RsXQ1j5TlXtESjFZi6Et4Cwg1cSWP10lgFsyt6bwIlOczCt3Elj0snXfEC+hRu1TSfHmbrXTV5K2zx7iFUTphwRR+fU5+bhmmDmo1cBcM3esoVbUNkWpgvaPHO4nm5ta66rYk8+tp43iWmYam8kzftita0767nxbQ6Ka2qWriqYhnxyGRX1IJMrpIuV3un+DDUodKEqdfQ8LEq1roa7+Ioi7FzrgJD1nzIauNKRV9D5l2fmFgsrLdL1Toawu3EGrK1K5OqYS123pWpRNI62GauPCrjvKtcGqAV91G4W41e5+pqCEeOxpSr8R7QVQpu5kpM72dd1crf1YG2P8wmuSvb4HH0YmWjNaxJV/o2nDLe384VTXXmXFXaj+iB+mY9+mtrrv7u+W7tygkixdbZ8GfAtCunkYrkq1m3c7W8P5hn+ha9U7RDvWr+/Nf/J1O6V796XrhOTq2n37Kj9XvMez1N1s0jKz/TJZcs16hF9wS+AeGK33C4IjsgxgSOJ+U6h1lqXM4tj+GzWnV1Ej/g4P8re+DKHriyB67sgSt74MoeuLIHruyBK3vgyp7Ae5nZn60AAAAAAAAAAPwS/A+jfV6BDoDaGgAAAABJRU5ErkJggg==',
    },
    {
        label: 'Venus',
        imgPath:
            'https://lh3.googleusercontent.com/proxy/LlbaNov8VGptI-BsD9lS4z9XFLcBr9EYyMdVxR74PnKj4ET-VIgnDvHzIxGLWFxldXwou-FfT3LxKegTs_iGErZXTIsqJ6E3cFeCCEosdCsYZ48ko7jX',
    },
];
const tutorialSteps2 = [
    {
        label: 'Escuela Politécnica Nacional',
        imgPath:
            'https://cem.epn.edu.ec/imagenes/logos_institucionales/big_jpg/EPN_logo_big.jpg',
    },
    {
        label: 'Universidad Central del Ecuador',
        imgPath:
            'https://www.eduopinions.com/wp-content/uploads/2017/07/logo-15-2.png',
    },
    {
        label: 'Universidad San Francisco',
        imgPath:
            'https://upload.wikimedia.org/wikipedia/commons/f/f9/Escudo_usfq-01.png',
    },
    {
        label: 'UDLA',
        imgPath:
            'https://www.udla.edu.ec/wp-content/uploads/2016/07/Logo.jpg',
    },
    {
        label: 'Universidad Politécnica Saleciana',
        imgPath:
            'https://upload.wikimedia.org/wikipedia/commons/c/c0/Universidad_Polit%C3%A9cnica_Salesiana_%281%29.jpg',
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 400,
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
    },
    img: {
        height: 255,
        display: 'block',
        maxWidth: 400,
        overflow: 'hidden',
        width: '100%',
    },
}));
function CarruselEmpresaEstudiante() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <div style={{textAlign: "center"}}>
                        <h3>Empresas</h3>
                    </div>
                    <div className={classes.root}>
                        <Paper square elevation={0} className={classes.header}>
                            <Typography>{tutorialSteps[activeStep].label}</Typography>
                        </Paper>
                        <AutoPlaySwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={activeStep}
                            onChangeIndex={handleStepChange}
                            enableMouseEvents
                        >
                            {tutorialSteps.map((step, index) => (
                                <div key={step.label}>
                                    {Math.abs(activeStep - index) <= 2 ? (
                                        <img className={classes.img} src={step.imgPath} alt={step.label} />
                                    ) : null}
                                </div>
                            ))}
                        </AutoPlaySwipeableViews>
                        <MobileStepper
                            steps={maxSteps}
                            position="static"
                            variant="text"
                            activeStep={activeStep}
                            nextButton={
                                <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                                    Next
                                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                                </Button>
                            }
                            backButton={
                                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                                    Back
                                </Button>
                            }
                        />
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div style={{margin:"auto"}}>
                        <Button variant="contained" style={{backgroundColor: "#292F36", color:"white", margin: 150, width:150}}>
                            Ver Ofertas
                        </Button>
                    </div>

                </Grid>
                <Grid item xs={4}>
                    <div style={{textAlign: "center"}}>
                        <h3>Instituciones</h3>
                    </div>
                    <div className={classes.root}>
                        <Paper square elevation={0} className={classes.header}>
                            <Typography>{tutorialSteps2[activeStep].label}</Typography>
                        </Paper>
                        <AutoPlaySwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={activeStep}
                            onChangeIndex={handleStepChange}
                            enableMouseEvents
                        >
                            {tutorialSteps2.map((step, index) => (
                                <div key={step.label}>
                                    {Math.abs(activeStep - index) <= 2 ? (
                                        <img className={classes.img} src={step.imgPath} alt={step.label} />
                                    ) : null}
                                </div>
                            ))}
                        </AutoPlaySwipeableViews>
                        <MobileStepper
                            steps={maxSteps}
                            position="static"
                            variant="text"
                            activeStep={activeStep}
                            nextButton={
                                <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                                    Next
                                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                                </Button>
                            }
                            backButton={
                                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                                    Back
                                </Button>
                            }
                        />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
export default CarruselEmpresaEstudiante;