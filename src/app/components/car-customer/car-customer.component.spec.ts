import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCustomerComponent } from './car-customer.component';

describe('CarCustomerComponent', () => {
  let component: CarCustomerComponent;
  let fixture: ComponentFixture<CarCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
