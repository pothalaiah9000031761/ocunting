import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductmasterAddComponent } from './productmaster-add.component';

describe('ProductmasterAddComponent', () => {
  let component: ProductmasterAddComponent;
  let fixture: ComponentFixture<ProductmasterAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductmasterAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductmasterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
