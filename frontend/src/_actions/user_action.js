import axios from "axios";
// import { request } from '../utils/axios';

import {
  LOGIN_USER,
  SIGNUP_USER,
  LOGOUT_USER,
  // AUTH_USER
} from './types';


const USER_URL = 'https://j6d201.p.ssafy.io:9000/api/user';

export function loginUser(Id,Password) { //body에 넣어준 값들을 파라미터를 통해서 받아준다.

  const request = axios.post(`${USER_URL}/signin`, {
    id : Id,
    password : Password,
  })
    .then((res) => res.data) //서버(백엔드)에서 받은 data를 request에 저장해준다.
    console.log(request);

    return {
      type: LOGIN_USER, 
      payload: request 
  } 
}

export function signupUser(Id,Password,Name,Email,BirthDay,Phone,Authority) { //body에 넣어준 값들을 파라미터를 통해서 받아준다.

  const request = axios.post(`${USER_URL}/signup`, {
    id : Id,
    password : Password,
    name : Name,
    email : Email,
    birthday : BirthDay,
    phone : Phone,
    authority : Authority
  })
    .then((res) => res.data); //서버(백엔드)에서 받은 data를 request에 저장해준다.
    console.log(request);
    return {
      type: SIGNUP_USER, // types.js 에서 몰아서 관리하기 위해서 "REGISTER_USER"에서 다음 형태로 바꿔준다
      payload: request 
  }; //쉽게 말해 reducer에 action에서 보내주는 역할을 한다.
}

export function logoutUser() {
  return {
    type: LOGIN_USER,
  };
}