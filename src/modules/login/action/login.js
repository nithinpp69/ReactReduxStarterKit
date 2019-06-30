export function saveUserInfo(email, password) {
  console.log('email ', email)
  console.log('password ', password)
  return (dispatch, getState) => {
    return saveUserInfoSuccess(email, password)
  }
}

export function logoutUser() {
  return (dispatch, getState) => {
    return logoutUserSuccess()
  }
}
export function saveUserInfoSuccess(email, password) {
  console.log('email su ', email)
  console.log('password su ', password)
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