import { all, fork } from "redux-saga/effects"

//public
import AccountSaga from "./auth/register/saga"
import AuthSaga from "./auth/login/saga"
import ForgetSaga from "./auth/forgetpwd/saga"
import ProfileSaga from "./auth/profile/saga"
import LayoutSaga from "./layout/saga"

import demoSaga from "./demo/saga"
import modalitySaga from "./modality/saga"
import benefitSaga from "./benifit/saga"
import competitionSaga from "./competition/saga"
import activitySaga from "./activity/saga"
import equipmentSaga from "./equipment/saga"
import muscleSaga from "./muscle/saga"
import performanceSaga from "./performance/saga"
import exerciseSaga from "./exercises/saga"

import participatorSaga from "./participator/saga"

export default function* rootSaga() {
  yield all([
    //public
    fork(AccountSaga),
    fork(AuthSaga),
    fork(ForgetSaga),
    fork(ProfileSaga),
    fork(LayoutSaga),
    fork(demoSaga),
    fork(modalitySaga),
    fork(benefitSaga),
    fork(competitionSaga),
    fork(activitySaga),
    fork(equipmentSaga),
    fork(muscleSaga),
    fork(performanceSaga),
    fork(exerciseSaga),
    fork(participatorSaga)
  ])
}
