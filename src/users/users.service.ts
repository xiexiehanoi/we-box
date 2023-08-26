import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class usersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  googleLogin(req) {
    if (!req.user) {
      return 'No user from Google';
    }

    const payload = {
      email: req.user.email,
      sub: req.user.userId,
    };

    const jwt = this.jwtService.sign(payload);
    console.log(req.user);

    return {
      message: 'User information from Google',
      user: req.user,
      jwt,
    };
  }

  async register(email: string, firstName: string, lastName: string) {
    const user = await this.userRepository.save({
      email: email,
      firstName: firstName,
      lastName: lastName,
    });

    return user;
  }
}
