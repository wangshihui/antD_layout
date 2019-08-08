import {mainEntryPath} from "../gloabal/cfg"
var menuData={
    "memo":"rootPath虚拟节点,代表菜单根节点",
    "rootId":"/",
    "menus":[
        {
            "id":"001",
            "name":"首页",
            "path":"/index",
            "parent":"/"
        },
        {
            "id":"0002",
            "name":"管理",
            "path":"",
            "parent":"/",
            "exact":true
        },
        {
            "id":"0002001",
            "parent":"0002",
            "name":"版本管理",
            "path":"/manageVersion",
            "exact":true
        },
        {
            "id":"0002002",
            "parent":"0002",
            "name":"用户管理",
            "path":"/manageUser",
            "exact":true
        },
        {
            "id":"0003",    
            "parent":"/",
            "name":"开发",
            "path":"/devCfg",
            "exact":true
        },
        {
            "id":"0003001",    
            "parent":"0003",
            "name":"AppSecret重置",
            "path":"/AppSecret",
            "exact":true
        }
    ]
}

menuData.menus.forEach(menu=>{
    if(menu.path){
        menu.absolutePath=mainEntryPath+menu.path;
    }
})
function getMenus(){
    return menuData.menus;
}
function  getRootMenuId(){
    return menuData.rootId;
}
export default getMenus
export {getRootMenuId}