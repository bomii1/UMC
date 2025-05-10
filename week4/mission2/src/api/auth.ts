import axios from 'axios';

export const refreshAccessToken = async (refreshToken: string) => {
  const res = await axios.post('http://localhost:8000/v1/auth/refresh', {
    refreshToken,
  });
  return res.data.accessToken;
};
