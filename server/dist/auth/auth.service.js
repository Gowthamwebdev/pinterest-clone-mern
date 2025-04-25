"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const prisma_service_1 = require("../prisma/prisma.service");
const common_2 = require("@nestjs/common");
dotenv.config();
let AuthService = class AuthService {
    userService;
    prisma;
    constructor(userService, prisma) {
        this.userService = userService;
        this.prisma = prisma;
    }
    async userLogin(userData) {
        const { email, password } = userData;
        const user = await this.prisma.user.findUnique({ where: { email } });
        if (!user)
            throw new common_2.NotFoundException('User not found');
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword)
            throw new common_2.UnauthorizedException('Invalid password');
        const accessToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return {
            message: 'Login successful',
            accessToken,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                profile_img: user.profile_img,
            },
        };
    }
    async userSignUp(userData) {
        const { name, email, password, profile_img } = userData;
        const user = await this.prisma.user.findUnique({ where: { email } });
        if (user) {
            throw new common_2.UnauthorizedException('User already exists');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const createdUser = await this.prisma.user.create({
            data: {
                name: name,
                email: email,
                password: hashedPassword,
                profile_img: profile_img || 'null',
            },
        });
        return {
            message: 'User created successfully',
            user: {
                id: createdUser.id,
                email: createdUser.email,
                name: createdUser.name,
                profile_img: createdUser.profile_img,
            },
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UserService,
        prisma_service_1.PrismaService])
], AuthService);
//# sourceMappingURL=auth.service.js.map