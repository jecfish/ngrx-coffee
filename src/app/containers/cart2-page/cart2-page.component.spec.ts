import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cart2PageComponent } from './cart2-page.component';

describe('Cart2PageComponent', () => {
  let component: Cart2PageComponent;
  let fixture: ComponentFixture<Cart2PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cart2PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cart2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
