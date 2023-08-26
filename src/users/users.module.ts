import { Module } from '@nestjs/common';
import { usersController } from './users.controller';
import { usersService } from './users.service';
import { User } from 'src/entities/user.entity';
import { GoogleStrategy } from '../auth/google.strategy';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtStrategy } from '../auth/jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [usersController],
  providers: [usersService, GoogleStrategy, JwtStrategy],
})
export class usersModule {}
