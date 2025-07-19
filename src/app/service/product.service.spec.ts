import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { Product } from '../model/product.model';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });

    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch products from API', () => {
    const dummyProducts: Product[] = [{
    'id': 1,
    'title': "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    'price': 109.95,
    'description': "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    'category': "men's clothing",
    'image': "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    'rating': {
      'rate': 3.9,
      'count': 120
    }
  }];

    service.getProducts().subscribe(products => {
      expect(products.length).toBe(1);
      expect(products).toEqual(dummyProducts);
    });

    const req = httpMock.expectOne('https://fakestoreapi.com/products');
    expect(req.request.method).toBe('GET');
    req.flush(dummyProducts);
  });

  afterEach(() => httpMock.verify());
});