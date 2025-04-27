import { UserService } from 'src/users/users.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto, SignupDto } from './dto/auth.dto';
export declare class AuthService {
    private userService;
    private readonly prisma;
    constructor(userService: UserService, prisma: PrismaService);
    userLogin(userData: LoginDto): Promise<{
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
