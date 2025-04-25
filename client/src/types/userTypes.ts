export type userType = {
    userId: string,
    name: string,
    email: string,
    password: string,
    profileImg: string,
}

export type userState = {
    userId: string,
    name: string,
    email: string,
    password: string,
    profileImg: string,

    setUserId: (userId: string) => void;
    setName: (name: string) => void;
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
    setProfileImg:(profileImg: string) => void;

  resetUser: () => void;
}