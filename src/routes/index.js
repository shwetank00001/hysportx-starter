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

// community folder
import CommunityDashboard from "pages/Community/CommunityDashboard/CommunityDashboard";


// ERROR
import Error from "pages/Errors/NotFound";



// Dashboard
import Dashboard from "../pages/Dashboard/index";
import ParticipatorList from "pages/Community/ParticipatorList/index"



// main routes
const authProtectedRoutes =[
    { label:"Dashboard", path: "/community/dashboard", component: <Exercise />, user:'community' },
    { label:"Competition", path: "/community/competition", component: <Dashboard />, user:'community' },
    { label:"Participator", path: "/community/participators", component: <ParticipatorList /> , user:'community'},
    { label:"Exercise List", path: "/community/exercise", component: <Exercise />, user:'community'  },


    { label:"Dashboard", path: "Admin/dashboard", component: <Dashboard />, user:'Admin' },
    { label:"Activity", path: "Admin/hysport", component: <Hysport />, user:'Admin'  },
    { label:"Exercise List", path: "Admin/exercise", component: <Exercise />, user:'Admin'  },
]; 
const publicRoutes = [
  { path: "/", component: <CryptoIcoLanding /> },
  { path: "/logout", component: <Logout /> },
  { path: "/forgot-password", component: <ForgetPwd /> },
  { path: "/register", component: <Register /> }
]






export { authProtectedRoutes, publicRoutes }
