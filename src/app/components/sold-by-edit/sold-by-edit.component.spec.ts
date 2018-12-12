import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldByEditComponent } from './sold-by-edit.component';

describe('SoldByEditComponent', () => {
  let component: SoldByEditComponent;
  let fixture: ComponentFixture<SoldByEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoldByEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoldByEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
