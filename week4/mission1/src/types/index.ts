export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  data: {
    id: string;
    name: string;
    accessToken: string;
    refreshToken: string;
  };
}

export interface LogoutResponse {
  statusCode: number;
}
