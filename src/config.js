import {Redirect} from "react-router-dom";
import Basket from "./views/basket";
import Comingsoon from "./views/comingsoon";
import Consult from "./views/consult";
import Contact from "./views/contact";
import Error from "./views/error";
import Home from "./views/home";
import Login from "./views/login";
import PrivacyPolicy from "./views/privacy";
import Products from "./views/products";
import Register from "./views/register";
import Skincare from "./views/skincare";

const appCfg = {
    routes:[
        {navItem:true, exact:true, path:"/",name:"Home",view:<Home backLink={{name:"See products",path:"/products"}}/>},  
        {navItem:true, exact:true, path:"/consult",name:"Consult",view:<Consult/>},   
        {navItem:true, exact:true, path:"/products",name:"Products",view:<Products/>},       
        {navItem:true, exact:true, path:"/skincare",name:"Skincare",view:<Skincare/>}, 
        {navItem:true, exact:true, path:"/contact",name:"Contact",view:<Contact/>},   
        {navItem:true, exact:true, path:"/basket",name:<span className="fa fa-shopping-cart"></span>,view:<Basket/>},     
        {navItem:true, exact:true, path:"/login",name:<span className="fa fa-user-circle-o"></span>,view:<Login backLink={{name:" Register now!",href:"/register"}}/>},          
        {navItem:false, exact:true, path:"/register",name:"Register",view:<Register backLink={{name:" Login now!",href:"/login"}}/>},                        
        {navItem:false, exact:true, path:"/comingsoon",name:"Comingsoon",view:<Comingsoon/>},                
        {navItem:false, exact:false, path:"/error",name:"Error",view:<Error backLink={{name:"back to Home",href:"/"}}/>},
        {navItem:false, exact:true, path:"/privacy",name:"Privacy",view: <PrivacyPolicy backLink={{name:"back to Home",href:"/"}}/>},                
        {navItem:false, exact:false, path:"*",name:"any",view:<Redirect to="/error"/>}
    ]
};

const APP_LINKS = {
    messages: "message.php",
    users: "user.php"
};

export {
    appCfg,
    APP_LINKS
}