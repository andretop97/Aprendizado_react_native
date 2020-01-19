import React from "react";
import { createSwitchNavigator } from "react-navigation";

import MesaRouts from "./Mesa/Routes";
import Home from "./Home/Home";

export default createSwitchNavigator(
  {
    Mesa: MesaRouts,
    Home: Home
  },
  {
    initialRouteName: "Home"
  }
);
