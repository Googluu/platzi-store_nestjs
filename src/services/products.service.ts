import { Injectable } from '@nestjs/common';

import { Product } from './../entities/product.entity';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'bla bla',
      price: 122,
      image: '',
      stock: 12,
    },
  ];

  // traer todos los product
  findAll() {
    return this.products;
  }

  // buscar producto por id
  findOne(id: number) {
    return this.products.find((item) => item.id === id);
  }

  // crear nuevo producto
  create(payload: any) {
    this.counterId += this.counterId;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, changes: any) {
    const index = this.products.findIndex((item) => item.id === id);
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes,
    };
  }

  delete(id: number) {
    const index = this.products.findIndex((item) => item.id === id);
    this.products.splice(index, 1);
    return { id };
  }
}
