import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizePageComponent } from './customize-page.component';
import { CupComponent } from '../../components';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { appReducer } from '../../state/app.reducer';
import { appInitialState } from '../../state/app.init';

describe('CustomizePageComponent', () => {
  let component: CustomizePageComponent;
  let fixture: ComponentFixture<CustomizePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot(
          { app: appReducer },
          { initialState: { app: appInitialState } }
        )
      ],
      declarations: [ CustomizePageComponent, CupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
