export function saveUserInfo(email, password) {
  return (dispatch, getState) => {
    return dispatch(saveUserInfoSuccess(email, password))
  }
}

export function logoutUser() {
  return (dispatch, getState) => {
    return dispatch(logoutUserSuccess())
  }
}
export function saveUserInfoSuccess(email, password) {
  return ({
    type: 'USER_LOGIN',
    payload: { 'email': email, 'password': password }
  })
}
export function logoutUserSuccess() {
  return ({
    type: 'USER_LOGOUT'
  })
}