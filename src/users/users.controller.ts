import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { usersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('/google')
export class usersController {
  getHello: any;
  usersService: any;
  constructor(private readonly appService: usersService) {}

  @Get('')
  @UseGuards(AuthGuard('google'))
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async googleAuth(@Req() req) {}

  @Get('redirect/getUser')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    return this.appService.googleLogin(req);
  }
  @Post('/redirect/register')
  async register(@Body() body) {
    const email = body?.email;
    const firstName = body?.firstName;
    const lastName = body?.firstName;

    return this.usersService.register(email, firstName, lastName);
  }
}
