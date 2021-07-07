import React from 'react';
import FondoImg from "../Imagenes/fondo.png";
import Navbar from "../components/Navbar";
import Acerca from "../components/Acerca";
import PaperEmpresa from "../components/PaperEmpresa";
import PaperEstudiante from "../components/PaperEstudiante";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import PiePagina from "../components/PiePagina";
import CarruselEmpreEstu from '../components/CarruselEmpresaEstudiante'

function PaginaInicial(){
    return(
        <div>
            <React.Fragment>
                <CssBaseline />

                    <Typography component="div" style={{ backgroundColor: '#cfe8fc' }} />
                    <div style={{
                        backgroundImage: `url(${FondoImg})`,
                        height: 615
                    }}>
                        <Navbar/>
                        <Acerca/>
                    </div>

                    <div style={{padding:30}}>
                        <PaperEmpresa/>
                    </div>
                    <div style={{padding:30}}>
                        <PaperEstudiante/>
                    </div>
                    <div style={{padding:30}}>
                        <CarruselEmpreEstu/>
                    </div>
                    <div style={{backgroundColor: "#292F36",height:150}}>
                        <PiePagina/>
                    </div>

            </React.Fragment>
        </div>
    );
}
export default PaginaInicial;