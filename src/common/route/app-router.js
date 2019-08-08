import Welcome  from "../../business/welcome/index"
import NotFound from "../../business/error/404"
import getMenus from "../mock/menu.js"
import {AppLayOutWithRouter} from "../layouts/antd_menu/app_layout"
import LoginForm from "../login/login"
import {mainEntryPath} from "../gloabal/cfg"
const entry_index="/";
const welcomePage=Welcome;
const notFoundPage=NotFound;

let routerCfgs=[
  { 
    path:"/welcome",
    componet:Welcome,
  },
  { 
    path:"/manageIndex",
    componet:Welcome
  },
  { 
    path:"/index",
    componet:Welcome
  },
  { 
    path:"/AppSecret",
    componet:Welcome
  },{
    path:"/",
    componet:LoginForm
  },{
    path:mainEntryPath,
    componet:AppLayOutWithRouter,
    exact:false
  }
]

const menus=getMenus();




export {entry_index,welcomePage,notFoundPage}
routerCfgs=routerCfgs.map((route,index)=>{
  menus.find(menu=>{
      if(menu.path==route.path){
          route.ismenue=true;
      }
    })
    return route;
  }
);
console.log(routerCfgs)
export default routerCfgs