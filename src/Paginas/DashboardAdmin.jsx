import React from 'react';
import NavbarAdmin from "../components/NavbarAdmin";
import ListAdmin from "../components/ListAdmin";
import Grid from "@material-ui/core/Grid";

function DashboardAdmin() {

    return (
        <div style={{minHeight: '100vh', backgroundColor:"#1E1E2F", marginTop:0}}>
            <NavbarAdmin/>
            <Grid container >
                <Grid>
                    <ListAdmin/>
                </Grid>
                <Grid alignItems='center' lg={8}>
                    <div style={{margin:"center", alignItems:"center"}}>


                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default DashboardAdmin;