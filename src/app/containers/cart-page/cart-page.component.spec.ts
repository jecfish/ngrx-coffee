import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPageComponent } from './cart-page.component';
import { PayComponent } from '../../components/pay/pay.component';
import { StoreModule } from '@ngrx/store';
import { appInitialState } from '../../state/app.init';
import { appReducer } from '../../state/app.reducer';
import { RouterTestingModule } from '@angular/router/testing';

describe('CartPageComponent', () => {
  let component: CartPageComponent;
  let fixture: ComponentFixture<CartPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot(
          { app: appReducer },
          { initialState: { app: appInitialState } }
        )
      ],
      declarations: [CartPageComponent, PayComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
