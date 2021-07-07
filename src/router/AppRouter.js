import React from "react";
import { Route, Switch } from "react-router-dom";
import loadable from "@loadable/component";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Routes from "../router/routes";
import Loading from "../components/Loading";
import NoFound from "../components/NoFound";


const loadableOptions = { fallback: <Loading /> };
const AsyncHome = loadable(() => import("../Paginas/PaginaInicial"), loadableOptions);
const AsyncLogin = loadable(() => import("../Paginas/InicioSesion"), loadableOptions);
const AsyncLoginEmpresa = loadable(() => import("../Paginas/InicioSesionEmpresa"), loadableOptions);
const AsyncLoginPasante = loadable(() => import("../Paginas/InicioSesionPasante"), loadableOptions);
const AsyncRegister = loadable(() => import("../Paginas/Registrar"), loadableOptions);//
const AsyncRegisterEmpresa = loadable(() => import("../Paginas/RegistrarEmpresa"), loadableOptions);//
const AsyncRegisterPasante = loadable(() => import("../Paginas/RegistrarPasante"), loadableOptions);//
const AsyncLogout = loadable(() => import("../Paginas/Logout"), loadableOptions);

const AsyncDashboardAdmin = loadable(() => import("../Paginas/Dashboard"), loadableOptions);
const AsyncLoginP = loadable(() => import("../Paginas/Login"), loadableOptions);

const AppRouter = () => (
    <Switch>
        <PublicRoute exact path={Routes.HOME} component={AsyncHome} />
        <PublicRoute exact path={Routes.INICIOSESIONADMIN} component={AsyncLogin} />
        <PublicRoute exact path={Routes.INICIOSESIONEMPRESA} component={AsyncLoginEmpresa} />
        <PublicRoute exact path={Routes.INICIOSESIONPASANTE} component={AsyncLoginPasante} />

            <PublicRoute exact path={Routes.LOGIN} component={AsyncLoginP} />
        <PublicRoute exact path={Routes.REGISTROADMIN} component={AsyncRegister} />
        <PublicRoute exact path={Routes.REGISTROEMPRESA} component={AsyncRegisterEmpresa} />
        <PublicRoute exact path={Routes.REGISTROPASANTE} component={AsyncRegisterPasante} />

        <PrivateRoute exact path={Routes.DASHBOARDADMIN} component={AsyncDashboardAdmin} />
        <PrivateRoute path={Routes.LOGOUT} component={AsyncLogout} />

        <Route component={NoFound}/>
    </Switch>
);
export default AppRouter;