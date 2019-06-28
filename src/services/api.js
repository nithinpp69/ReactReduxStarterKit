import { fetchMethod } from '../services/fetchAPI'
import {
  BASE_PATH,
  HOME_URL
} from '../helpers/constants';

export const getHome = () => {
  return fetchMethod.get(BASE_PATH + HOME_URL);
}

