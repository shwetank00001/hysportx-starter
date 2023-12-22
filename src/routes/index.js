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
import Error from "components/VerticalLayout/Error";



// Dashboard
import Dashboard from "../pages/Dashboard/index";

//----import route path-----

import DemoPage from "pages/DemoPage"
import ModalityPage from "pages/Modality"


import HActiviy from "pages/HYSPORTX/HActivity";
import HCondition from "pages/HYSPORTX/HCondition";
import HExercise from "pages/HYSPORTX/HExercise";



// main routes
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
  { path: "/error", component: <Error /> },
]

const publicRoutes = [
  { path: "/", component: <CryptoIcoLanding /> },
  { path: "/logout", component: <Logout /> },
  { path: "/forgot-password", component: <ForgetPwd /> },
  { path: "/register", component: <Register /> }
]


// copied routes

// const adminRoutes = [
//   {
//     path: `${Constant.rolePrefix.admin}/dashboard`,
//     component: <AdminDashboard />,
//   },
//   {
//     path: `${Constant.rolePrefix.admin}/email-read1`,
//     component: <ShortcutHub />,
//   },
//   { path: `${Constant.rolePrefix.admin}/kyc`, component: <Read /> },
//   {
//     path: `${Constant.rolePrefix.admin}/email-inbox`,
//     component: <EmailInbox />,
//   },
//   {
//     path: `${Constant.rolePrefix.admin}/email-billing`,
//     ciomponent: <EmailBilling />,
//   },
//   { path: `${Constant.rolePrefix.admin}/read1`, ciomponent: <Read /> },
//   { path: `${Constant.rolePrefix.admin}/email-read`, component: <EmailRead /> },
//   { path: `${Constant.rolePrefix.admin}/HYSPORTX`, component: <HYSPORTX /> },
//   {
//     path: `${Constant.rolePrefix.admin}/HYSPORTX category`,
//     component: <HCategory />,
//   },
//   // { path: `${Constant.rolePrefix.admin}/communitylist`, component: <CommunityList /> },
//   { path: `${Constant.rolePrefix.admin}/calender`, component: <Calendar /> },
//   { path: `${Constant.rolePrefix.admin}/chat`, component: <Chat /> },
// ]

const communityRoutes = [
  {
    path: `/community/dashboard`,
    component: <CommunityDashboard />,
  },
  // {
  //   path: `/community/participator-list`,
  //   component: <ParticipatorList />,
  // },
  // {
  //   path: `/community/create-competition`,
  //   component: <CreateCompetition />,
  // },
]

// const participatorRoutes = [
//   {
//     path: `${Constant.rolePrefix.participator}/dashboard`,
//     component: <ParticipaterDashboard />,
//   },
//   {
//     path: `${Constant.rolePrefix.participator}/productservice`,
//     component: <Product />,
//   },
//   {
//     path: `${Constant.rolePrefix.participator}/participatoremailhistory`,
//     component: <PHistory />,
//   },
//   {
//     path: `${Constant.rolePrefix.participator}/participatorsession`,
//     component: <PSession />,
//   },
//   {
//     path: `${Constant.rolePrefix.participator}/participatornotification`,
//     component: <PNotification />,
//   },
// ]




export { authProtectedRoutes, publicRoutes, communityRoutes }
