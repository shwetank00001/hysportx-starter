import React from "react";
import { Navigate } from "react-router-dom";

// Profile
import UserProfile from "../pages/Authentication/user-profile";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";

import CryptoIcoLanding from "../pages/CryptoIcoLanding/index";

import Hysport from "pages/HYSPORTX";

import Exercise from "pages/Exercise"



// Dashboard
import Dashboard from "../pages/Dashboard/index";

//----import route path-----

import DemoPage from "pages/DemoPage"
import ModalityPage from "pages/Modality"


import HActiviy from "pages/HYSPORTX/HActivity";
import HCondition from "pages/HYSPORTX/HCondition";
import HExercise from "pages/HYSPORTX/HExercise";




const authProtectedRoutes = [
  { path: "/dashboard", component: <Dashboard /> },
  // //profile
  { path: "/profile", component: <UserProfile /> },

  // ---start create route----
  { path: "/Demo", component: <DemoPage /> },
  { path: "/modality", component: <ModalityPage /> },
  // { path: "/exercise", component: <HExercise /> },
  // { path: "/activity", component: <HActiviy /> },
  // { path: "/condition", component: <HCondition /> },
  { path: "/hysport", component: <Hysport /> },
  { path: "/exercise", component: <Exercise /> },
]



const publicRoutes = [
  { path: "/", component: <CryptoIcoLanding /> },
  { path: "/logout", component: <Logout /> },
  { path: "/forgot-password", component: <ForgetPwd /> },
  { path: "/register", component: <Register /> },
];

export { authProtectedRoutes, publicRoutes };
