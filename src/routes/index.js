import React from "react";

import CryptoIcoLanding from "../pages/CryptoIcoLanding/index";

import Hysport from "pages/HYSPORTX";

import Exercise from "pages/Exercise"

// Partcipator folder
import ParticipatorDashboard from '../pages/Participator/Dashboard'

// community folder
import CommunityDashboard from "pages/Community/CommunityDashboard/CommunityDashboard";


// ERROR
import Error from "pages/Errors/NotFound";



// Dashboard
import Dashboard from "../pages/Dashboard/index";
import ParticipatorList from "pages/Community/ParticipatorList/index"
import LeaderBoard from "pages/LeaderBoard";
import Community from "pages/Participator/CommunityList";

import ParticipatorMainList from "pages/Community/ParticipatorMainList/ParticipatorMainList";



// main routes
const authProtectedRoutes =[
    // Community routes
    { label:"Dashboard", path: "/community/dashboard", component: <CommunityDashboard />, user:'community',icon:"mdi mdi-run",parent:0 },
    { label:"Competition", path: "/community/competition", component: <Exercise />, user:'community',icon:"mdi mdi-run",parent:0 },
    { label:"Participator Request", path: "/community/participator-request", component: <ParticipatorList /> , user:'community',icon:"mdi mdi-run",parent:0},
    { label:"Participator List", path: "/community/participator-main-list", component: <ParticipatorMainList /> , user:'community',icon:"mdi mdi-run",parent:0},
    { label:"Exercise List", path: "/community/exercise", component: <Exercise />, user:'community',icon:"mdi mdi-run",parent:0 },
    
    // Admin routes
    { label:"Dashboard", path: "/Admin/dashboard", component: <Dashboard />, user:'Admin',icon:"mdi mdi-run",parent:0 },
    { label:"Create Competition", path: "/Admin/hysport", component: <Hysport />, user:'Admin',icon:"mdi mdi-run",parent:0  },
    { label:"Exercise List", path: "/Admin/exercise", component: <Exercise />, user:'Admin',icon:"mdi mdi-run",parent:0  },

    // Participator routes
    { label:"Dashboard", path: "/Participator/dashboard", component: <ParticipatorDashboard />, user:'Participator',icon:"mdi mdi-run",parent:0 },
    { label:"Community", path: "/Participator/communities", component: <Community/>, user:'Participator',icon:"mdi mdi-run",parent:0 },
    { label:"Comptitions", path: "/Participator/comptitions", component: <ParticipatorDashboard />, user:'Participator',icon:"mdi mdi-run",parent:0 },
]; 
const publicRoutes = [
  { path: "/Leaderboard", component: <LeaderBoard/> },
  { path: "/", component: <CryptoIcoLanding /> },
]






export { authProtectedRoutes, publicRoutes }
