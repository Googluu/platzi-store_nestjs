import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // Get
  @Get()
  getHello(): string {
    return 'Hello World!';
  }

  @Get('nuevo')
  newEndpoint() {
    return 'yo soy nuevo!';
  }

  @Get('/ruta/')
  nuevo() {
    return 'con /sas/';
  }

  // Get query ?=

  @Get('products')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `producs limit=> ${limit} offset=> ${offset} brand=> ${brand}`;
  }

  // Get Params no dinamica

  @Get('products/filter')
  getProductFilter() {
    return `yo soy filter`;
  }

  // Get Params dinamicas /:id

  @Get('products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }

  @Get('categories/:id/products/:productId')
  getCategory(@Param('id') id: string, @Param('productId') productId: string) {
    return `product ${id} and ${productId}`;
  }
}
