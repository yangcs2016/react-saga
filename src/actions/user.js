import {FETCH_USER_REQUEST} from '../constants/user'

export const getUser = () => {
  return {
      type:FETCH_USER_REQUEST
  }
}

