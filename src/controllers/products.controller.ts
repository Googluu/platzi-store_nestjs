import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `producs limit=> ${limit} offset=> ${offset} brand=> ${brand}`;
  }

  // Get Params no dinamica

  @Get('filter')
  getProductFilter() {
    return `yo soy filter`;
  }

  // Get Params dinamicas /:id

  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }
}
