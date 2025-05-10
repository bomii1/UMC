import { LoginPayload, LoginResponse } from '../types';
import apiClient from './apiClient';

const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  const res = await apiClient.post('auth/signin', payload);
  return res.data;
};

export default login;
