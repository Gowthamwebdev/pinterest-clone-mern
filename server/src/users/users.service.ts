import { Injectable } from "@nestjs/common";
export const users = [
    {
        user_id: '0',
        name: 'John',
        email: 'john@gmail.com',
        password: 'john1@',
        profile_img: 'http:image.com',
    }
];

@Injectable()
export class UserService {
    findUserByName(input: any){
        return users.find((user) => user.name === input.name);
    }
}