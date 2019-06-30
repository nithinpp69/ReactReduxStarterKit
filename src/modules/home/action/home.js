import { getHome } from '../../../services/api';

export function getPeopleList(page) {
  return (dispatch, getState) => {
    return getHome(page).then(response => {
      return response.json();
    }).then(responseJson => {
      dispatch(getHomeSuccess(responseJson));
    })
      .catch(error => {
        dispatch(getHomeError(error))
      });
  }
}

export function getHomeSuccess(responseJson) {
  return ({
    type: 'HOME_RESULT',
    payload: responseJson
  })
}

export function getHomeError(error) {
  console.log(error);
  return ({
    type: 'HOME_ERROR',
  })
}