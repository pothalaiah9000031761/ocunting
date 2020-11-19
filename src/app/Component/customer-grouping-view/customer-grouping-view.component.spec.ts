import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerGroupingViewComponent } from './customer-grouping-view.component';

describe('CustomerGroupingViewComponent', () => {
  let component: CustomerGroupingViewComponent;
  let fixture: ComponentFixture<CustomerGroupingViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerGroupingViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerGroupingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
