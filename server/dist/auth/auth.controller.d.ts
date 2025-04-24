import { AuthService } from './auth.service';
import { LoginDto, SignupDto } from './dto/auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    userLogin(loginDto: LoginDto): Promise<{
        message: string;
        accessToken: any;
        user: {
            id: number;
            email: string;
            name: string;
            profile_img: string;
        };
    }>;
    userSignUp(signupDto: SignupDto): Promise<any>;
}
