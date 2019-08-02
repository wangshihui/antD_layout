import {withRouter} from "react-router-dom";
import {  useEffect } from 'react';

const ScrollToTop = ({ children, location: { pathname } }) => {
    console.log("1111111111111")
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return children;
  };
  
  export default withRouter(ScrollToTop);