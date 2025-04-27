export type AuthType = {
    isAuthenticated: boolean,
    accessToken: string,
}

export type AuthState = {
  isAuthenticated: boolean,
  accessToken: string,

    setIsAuthenticated: (isAuthenticated: boolean) => void;
    setAccessToken: (accessToken: string) => void;

  resetAuth: () => void;
}