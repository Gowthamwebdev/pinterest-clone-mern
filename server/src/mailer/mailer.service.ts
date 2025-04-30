import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MailerService {
  private transporter;

  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {
    this.transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASSWORD
        },
        pool: true,
        maxConnections: 5,
        maxMessages: 100
    });
  }

  async sendPasswordResetEmail(email: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) return;

    const token = this.jwtService.sign({ email });

    const resetUrl = `http://localhost:5173/auth/reset-password?token=${token}`;

    await this.transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: email,
      subject: 'Password Reset Request',
      html: `
        <div>
          <h2>Password Reset Request</h2>
          <p>Click the link below to reset your password:</p>
          <a href="${resetUrl}" 
               style="display: inline-block; padding: 12px 24px; background-color: #2563eb; 
                      color: white; text-decoration: none; border-radius: 4px; font-weight: bold;">
               Reset Password
            </a>
          <p>This link will expire in 1 hour.</p>
        </div>
      `,
    });
  }
}