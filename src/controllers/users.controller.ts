import { Controller, Post, Body } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion de crear user',
      payload,
    };
  }
}
