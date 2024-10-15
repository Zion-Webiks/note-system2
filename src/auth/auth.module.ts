import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import 'dotenv/config'

@Module({
  imports: [
    forwardRef(() => UserModule),
    JwtModule.register({
      secret: process.env.TOKEN_SECRET || 'defult',
      signOptions: {expiresIn: '1h'}
    })
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
