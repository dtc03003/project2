//전 State와 지금 action 을 더해서 nextState를 만듬
import {
  LOGIN_USER, LOGOUT_USER, SIGNUP_USER, 
  // AUTH_USER
} from '../_actions/types';




export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER: //action과 type 둘다 가졌으므로 다음 nextState를 만들기 위해서 return해줌
        return { 
          ...state,
          AccessToken: action.payload.accessToken,
          RefreshToken: action.payload.refreshToken,
          UserId: action.payload.userId,
          loginSuccess: action.payload 
        } //...state는 스프레이트 오퍼레이터(위에 빈 상태를 그대로 가져옴)
      break;
    case SIGNUP_USER:
      return { ...state, success: action.payload }
      break;
    case LOGOUT_USER:
      return state;
    default:
      return state;
  }
}
