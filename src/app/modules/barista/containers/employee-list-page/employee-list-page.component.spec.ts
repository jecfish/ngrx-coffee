import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

import { EmployeeListPageComponent } from './employee-list-page.component';

import { baristaReducer } from '../../+state/barista.reducer';
import { baristaInitialState } from '../../+state/barista.init';
import { appReducer } from '../../../../state/app.reducer';
import { appInitialState } from '../../../../state/app.init';

describe('EmployeeListPageComponent', () => {
  let component: EmployeeListPageComponent;
  let fixture: ComponentFixture<EmployeeListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature('barista', baristaReducer, { initialState: baristaInitialState })
      ],
      declarations: [ EmployeeListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
