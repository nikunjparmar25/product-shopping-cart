import { TestBed } from '@angular/core/testing';
import { CartService } from './cart.service';
import { Product } from '../model/product.model';

describe('CartService', () => {
  let service: CartService;

  const mockProduct: Product = {
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
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  afterEach(() => {
    // reset state after each test
    (service as any).items = [];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add product to cart', () => {
    service.addToCart(mockProduct);
    const cartItems = service.getCartItems();

    expect(cartItems.length).toBe(1);
    expect(cartItems[0]).toEqual(mockProduct);
  });

  it('should return all cart items', () => {
    service.addToCart(mockProduct);
    service.addToCart({
      ...mockProduct,
      "id": 2,
      "title": "Mens Casual Premium Slim Fit T-Shirts",
      "price": 22.3,
      "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "rating": {
        "rate": 4.1,
        "count": 259
      }
    });

    const cartItems = service.getCartItems();

    expect(cartItems.length).toBe(2);
    expect(cartItems[0].title).toBe('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops');
    expect(cartItems[1].title).toBe('Mens Casual Premium Slim Fit T-Shirts');
  });
});
