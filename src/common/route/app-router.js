import Welcome from "../../business/welcome/index"

const entry_index="/";
const routerCfg=[
  { 
    path:"welcome",
    componet:Welcome
  },
  { 
    path:"manageIndex",
    componet:Welcome
  },
  { 
    path:"manageVersion",
    componet:Welcome
  },
  { 
    path:"devCfg",
    componet:Welcome
  }
]
export {entry_index}
export default routerCfg