import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductmasterViewComponent } from './productmaster-view.component';

describe('ProductmasterViewComponent', () => {
  let component: ProductmasterViewComponent;
  let fixture: ComponentFixture<ProductmasterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductmasterViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductmasterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
