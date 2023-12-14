import { combineReducers } from "redux";

// Front
import Layout from "./layout/reducer";

// Authentication
import Login from "./auth/login/reducer";
import Account from "./auth/register/reducer";
import ForgetPassword from "./auth/forgetpwd/reducer";
import Profile from "./auth/profile/reducer";

//
import DemoReducer from "./demo/reducer";

// modality
import ModalityReducer from "./modality/reducer";

//benefit
import benefitReducer from "./benifit/reducer"

import CompetitionReducer from "./competition/reducer";

import activityReducer from "./activity/reducer";
import equipmentReducer from "./equipment/reducer";
import muscleReducer from "./muscle/reducer";
import performanceReducer from "./performance/reducer";
import exerciseReducer from "./exercises/reducer";
import competitionReducer from "./competition/reducer";

const rootReducer = combineReducers({
  // public
  Layout,
  Login,
  Account,
  ForgetPassword,
  Profile,
  DemoReducer,
  ModalityReducer,
  benefitReducer,
  CompetitionReducer,
  activityReducer,
  equipmentReducer,
  muscleReducer,
  performanceReducer,
  exerciseReducer,
  competitionReducer
})

export default rootReducer;
