const publicRoutes = {
    HOME:'/',
    ACERCA:'/acerca',
    EMPRESA: '/empresa',
    PASANTE:'/pasante',
    INICIOSESIONADMIN:'/inicioSesionAdmin',
    INICIOSESIONEMPRESA:'/inicioSesionEmpresa',
    INICIOSESIONPASANTE:'/inicioSesionPasante',
    REGISTROADMIN:'/registrarAdmin',
    REGISTROEMPRESA:'/registrarEmpresa',
    REGISTROPASANTE:'/registrarPasante',
    LOGIN:'/login',
};
const privateRoutes = {
    LOGOUT: "/logout",
    DASHBOARDADMIN:'/dashboardAdmin',
};
const Routes = {
    ...publicRoutes,
    ...privateRoutes,
};
export default Routes;