var d=100

module.exports={
    "h":"100",
    "s":20
}
const addBablePlugin =  plugin=>config=>{
    getBabelLoader(config).options.plugins.push(plugin)
    return config;
}
 const fixBableImports=(libraryName,options)=>{
    addBablePlugin(["import",Object.assign(
        {},
        {
            libraryName 
        },
        options,
        `fix-${libraryName}-imports`
    )])
 }