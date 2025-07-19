import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ProductService } from './service/product.service';
import { CartService } from './service/cart.service';
import { of } from 'rxjs';
import { Product } from './model/product.model';
import { ItemCardComponent } from './shared/item-card.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let mockProductService: jasmine.SpyObj<ProductService>;
  let mockCartService: jasmine.SpyObj<CartService>;

  const mockProducts: Product[] = [
    {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  },
  {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "rating": {
      "rate": 4.7,
      "count": 500
    }
  }];

  beforeEach(async () => {
    mockProductService = jasmine.createSpyObj('ProductService', ['getProducts']);
    mockCartService = jasmine.createSpyObj('CartService', ['getCartItems', 'addToCart']);

    await TestBed.configureTestingModule({
      declarations: [AppComponent, ItemCardComponent],
      providers: [
        { provide: ProductService, useValue: mockProductService },
        { provide: CartService, useValue: mockCartService }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    mockProductService.getProducts.and.returnValue(of(mockProducts));
    mockCartService.getCartItems.and.returnValue([mockProducts[0]]);
    
    fixture.detectChanges(); // triggers ngOnInit
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch products on init', () => {
    expect(component.products.length).toBe(3);
    expect(component.products[0].title).toBe('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops');
    expect(mockProductService.getProducts).toHaveBeenCalled();
  });

  it('should initialize cart items on init', () => {
    expect(component.cartItems.length).toBe(1);
    expect(mockCartService.getCartItems).toHaveBeenCalled();
  });

  it('should call cartService.addToCart when handleAddToCart is called', () => {
    const product: Product = mockProducts[1];
    component.handleAddToCart(product);
    expect(mockCartService.addToCart).toHaveBeenCalledWith(product);
  });

  it('should return correct total from getTotal()', () => {
    const total = component.getTotal();
    expect(total).toBe(109.95);
  });
});