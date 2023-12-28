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



// main routes
const authProtectedRoutes =[
    // Community routes
    { label:"Dashboard", path: "/community/dashboard", component: <CommunityDashboard />, user:'community' },
    { label:"Competition", path: "/community/competition", component: <Exercise />, user:'community' },
    { label:"Participator", path: "/community/participators", component: <ParticipatorList /> , user:'community'},
    { label:"Exercise List", path: "/community/exercise", component: <Exercise />, user:'community' },
    
    // Admin routes
    { label:"Dashboard", path: "/Admin/dashboard", component: <Dashboard />, user:'Admin' },
    { label:"Activity", path: "/Admin/hysport", component: <Hysport />, user:'Admin'  },
    { label:"Exercise List", path: "/Admin/exercise", component: <Exercise />, user:'Admin'  },

    // Participator routes
    { label:"Dashboard", path: "/Participator/dashboard", component: <ParticipatorDashboard />, user:'Participator' },
    { label:"Community", path: "/Participator/communities", component: <Community/>, user:'Participator' },
    { label:"Comptitions", path: "/Participator/comptitions", component: <ParticipatorDashboard />, user:'Participator' },
]; 
const publicRoutes = [
  { path: "/Leaderboard", component: <LeaderBoard/> },
  { path: "/", component: <CryptoIcoLanding /> },
]






export { authProtectedRoutes, publicRoutes }
