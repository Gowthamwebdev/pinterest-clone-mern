import { UserService } from 'src/users/users.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignupDto } from './dto/auth.dto';
export declare class AuthService {
    private userService;
    private readonly prisma;
    constructor(userService: UserService, prisma: PrismaService);
    userLogin(userData: {
        email: string;
        password: string;
    }): Promise<{
        message: string;
        accessToken: any;
        user: {
            id: number;
            email: string;
            name: string;
            profile_img: string;
        };
    }>;
    userSignUp(userData: SignupDto): Promise<any>;
}
