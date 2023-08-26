import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { usersController } from './users.controller';
import { usersService } from './users.service';
import { GoogleStrategy } from '../auth/google.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../auth/jwt.strategy';
import { User } from 'src/entities/user.entity';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [usersController],
  providers: [usersService, GoogleStrategy, JwtStrategy],
})
export class usersModule {}

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // Add this line to import User entity
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [usersController],
  providers: [usersService, GoogleStrategy, JwtStrategy],
})
export class createUserModule {}
