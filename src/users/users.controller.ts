import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { usersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('google')
export class usersController {
  getHello: any;
  constructor(private readonly appService: usersService) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async googleAuth(@Req() req) {}

  @Get('redirect')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    return this.appService.googleLogin(req);
  }
}
