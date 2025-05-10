// import { LogoutResponse } from '../types';
import apiClient from './apiClient';

const logout = async () => {
  console.log('out');
  const res = await apiClient.post('auth/signout');
  console.log(res.data, res, '로그아웃');
  return res.data;
};

export default logout;
