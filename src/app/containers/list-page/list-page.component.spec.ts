import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

import { ListPageComponent } from './list-page.component';
import { CupComponent } from '../../components';
import { PayComponent } from '../../components/pay/pay.component';

import { appReducer } from '../../state/app.reducer';
import { appInitialState } from '../../state/app.init';

describe('ListPageComponent', () => {
  let component: ListPageComponent;
  let fixture: ComponentFixture<ListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot(
          { app: appReducer },
          { initialState: { app: appInitialState } }
        )
      ],
      declarations: [ ListPageComponent, CupComponent, PayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
