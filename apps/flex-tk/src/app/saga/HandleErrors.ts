
export default function*(status: number): {} {
  if (status !== 200) {
    // yield put(actions.setSpinner(false))
    // yield put(actions.receiveError(parseError(status)))
    if (status === 401) {
      // yield put(actions.logout())
    }

    return true;
  }

  return false;
}
