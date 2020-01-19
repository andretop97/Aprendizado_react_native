import React from "react";
import { createSwitchNavigator } from "react-navigation";
import MesaHome from "./Mesa";
export default createSwitchNavigator(
  {
    MesaHome: MesaHome
  },
  {
    initialRouteName: "MesaHome"
  }
);
