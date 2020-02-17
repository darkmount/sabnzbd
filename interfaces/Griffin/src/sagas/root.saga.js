import { all, takeEvery, takeLatest } from "redux-saga/effects";

function* appSaga() {
  yield put({ type: "APP_STARTED_SUCCESS", app: "sab" });
}

export function* rootSaga(dispatch) {
  yield takeEvery("APP_STARTED", appSaga);
}
