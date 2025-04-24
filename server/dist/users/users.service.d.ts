export declare const users: {
    user_id: string;
    name: string;
    email: string;
    password: string;
    profile_img: string;
}[];
export declare class UserService {
    findUserByName(input: any): {
        user_id: string;
        name: string;
        email: string;
        password: string;
        profile_img: string;
    } | undefined;
}
