import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';

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
  getOne(@Param('productId') productId: string) {
    return `product ${productId}`;
  }

  // create Post product

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion de crear',
      payload,
    };
  }
}
