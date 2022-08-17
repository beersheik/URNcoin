import {
    Home,
    P2P,
    Faq,
    Login,
    Signup,
    Spot
} from "../pages/index";


const publicRoutes = [
    { path: "/", exact: true, name: "Home", component: Home },
    { path: "/login", exact: true, name: "Login", component: Login },
    { path: "/signup", exact: true, name: "Signup", component: Signup },
    {
        path: "/p2p", exact: true, name: "P2P", component: P2P
    },
    {
        path: "/faq", exact: true, name: "P2P", component: Faq
    },
    {
        path: "/spot", exact: true, name: "SPOT", component: Spot
    }
    // { path: "/marketplace", exact: true, name: "Marketplace", component: Marketplace }
];

const privateRoutes = [
    // { path: "/", exact: true, name: "Home", component: Home },
    // { path: "/login", exact: true, name: "Login", component: Login },
    // { path: "/logout", exact: true, name: "Logout", component: Logout },
    // { path: "/dashboard", exact: true, name: "Dashboard", component: Dashboard },
    // { path: "/marketplace", exact: true, name: "Marketplace", component: Marketplace },
    // { path: "/market-details/:id", exact: true, name: "Market Details", component: MarketDetails },
    // { path: "/listpage", exact: true, name: "Listpage", component: Listpage }
];


export default { publicRoutes, privateRoutes };
