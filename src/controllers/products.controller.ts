import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  Res,
} from '@nestjs/common';

import { Response } from 'express';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    // mejor forma de comunicar datos entre cliente y back-end
    return {
      message: `producs limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    };
  }

  // Get Params no dinamica

  @Get('filter')
  getProductFilter() {
    return `yo soy filter`;
  }

  // Get Params dinamicas /:id

  @Get(':productId')
  // click derecho opcion Got to definition para aprender como funciona
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Res() response: Response, @Param('productId') productId: string) {
    // manejando express
    response.status(200).send({
      message: `product ${productId}`,
    });
  }

  // create Post product

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion de crear',
      payload,
    };
  }

  // update product id and body

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  // delete product id

  @Delete(':id')
  delete(@Param('id') id: number) {
    return id;
  }
}
