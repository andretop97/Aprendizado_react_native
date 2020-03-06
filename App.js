import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import SignIn from "./js/Login/SignInScreen";
import SignUp from "./js/Login/SignUpScreen";
import HomeApp from "./js/NavegacãoInterna";

import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyA0SqURtlbpte_peG0v-9NCzG-iCUhR6TY",
  authDomain: "dreamakers-1ba93.firebaseapp.com",
  databaseURL: "https://dreamakers-1ba93.firebaseio.com",
  projectId: "dreamakers-1ba93",
  storageBucket: "dreamakers-1ba93.appspot.com",
  messagingSenderId: "304346597763",
  appId: "1:304346597763:web:f4d260989f0efd85224eb6",
  measurementId: "G-YKKWWDV84J"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Routes = createSwitchNavigator(
  {
    Login: SignIn,
    Register: SignUp,
    Home: HomeApp
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(Routes);
