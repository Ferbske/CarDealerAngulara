import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCustomerEditComponent } from './car-customer-edit.component';

describe('CarCustomerEditComponent', () => {
  let component: CarCustomerEditComponent;
  let fixture: ComponentFixture<CarCustomerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarCustomerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarCustomerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
