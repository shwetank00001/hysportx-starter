import React from "react";
import CryptoIcoLanding from "../pages/CryptoIcoLanding/index";
import Hysport from "pages/HYSPORTX";
import Exercise from "pages/Exercise"

// Partcipator folder
import ParticipatorDashboard from '../pages/Participator/Dashboard'

// community folder
import CommunityDashboard from "pages/Community/CommunityDashboard/CommunityDashboard";
import ParticipatorMainList from "pages/Community/ParticipatorMainList/ParticipatorMainList";
import ParticipatorList from "pages/Community/ParticipatorList/index"

// ERROR
import Error from "pages/Errors/NotFound";



// Dashboard
import Dashboard from "../pages/Dashboard/index";
import LeaderBoard from "pages/LeaderBoard";
import Community from "pages/Participator/CommunityList";




// main routes
const authProtectedRoutes =[
    // Community routes
    { label:"Dashboard", path: "/community/dashboard", component: <CommunityDashboard />, user:'community',icon:"mdi mdi-run",children:[] },
    { label:"Competition", path: "/community/competition", component: <Exercise />, user:'community',icon:"mdi mdi-run",children:[] },
    { label:"Participator Request", path: "/community/participator-request", component: <ParticipatorList /> , user:'community',icon:"mdi mdi-run",children:[]},
    { label:"Participator List", path: "/community/participator-main-list", component: <ParticipatorMainList /> , user:'community',icon:"mdi mdi-run",children:[]},
    { label:"Exercise List", path: "/community/exercise", component: <Exercise />, user:'community',icon:"mdi mdi-run",children:[] },
    { label:"Dummy", path: "/community/dummy", component: <Dashboard />, user:'community',icon:"mdi mdi-run",children:[
      {label:'dummy1',path:'/community/dummy1',component:<CommunityDashboard />},
      {label:'dummy2',path:'/community/dummy2',component:<CommunityDashboard />},
      {label:'dummy3',path:'/community/dummy3',component:<CommunityDashboard />},
      {label:'dummy4',path:'/community/dummy4',component:<CommunityDashboard />}
    ] },
    // Admin routes
    { label:"Dashboard", path: "/Admin/dashboard", component: <Dashboard />, user:'Admin',icon:"mdi mdi-run",children:[] },
    { label:"Create Competition", path: "/Admin/hysport", component: <Hysport />, user:'Admin',icon:"mdi mdi-run",children:[]  },
    { label:"Exercise List", path: "/Admin/exercise", component: <Exercise />, user:'Admin',icon:"mdi mdi-run",children:[]  },
    // Participator routes
    { label:"Dashboard", path: "/Participator/dashboard", component: <ParticipatorDashboard />, user:'Participator',icon:"mdi mdi-run",children:[] },
    { label:"Community", path: "/Participator/communities", component: <Community/>, user:'Participator',icon:"mdi mdi-run",children:[] },
    { label:"Comptitions", path: "/Participator/comptitions", component: <ParticipatorDashboard />, user:'Participator',icon:"mdi mdi-run",children:[] },
]; 
const publicRoutes = [
  { path: "/Leaderboard", component: <LeaderBoard/> },
  { path: "/", component: <CryptoIcoLanding /> },
]






export { authProtectedRoutes, publicRoutes }
