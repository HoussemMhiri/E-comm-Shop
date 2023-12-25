import React from "react";
import HeaderNav from "../homePage/pages/navBar/HeaderNav";
import FooterComp from "../homePage/pages/footer/FooterComp";
import LogIn from "./LogIn";

import { NewsL } from "../homePage/pages/main";
import Register from "./Register";
const SignComp = () => {
  return (
    <div>
      {<LogIn />}
      {/*    <Register /> */}
    </div>
  );
};

export default SignComp;
