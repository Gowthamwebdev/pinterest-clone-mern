export type authType = {
    isAuthenticated: boolean,
    accessToken: string,
}


export type authState = {
  isAuthenticated: boolean,
  accessToken: string,

    setIsAuthenticated: (isAuthenticated: boolean) => void;
    setAccessToken: (accessToken: string) => void;

  resetAuth: () => void;
}