import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductmasterUpdateComponent } from './productmaster-update.component';

describe('ProductmasterUpdateComponent', () => {
  let component: ProductmasterUpdateComponent;
  let fixture: ComponentFixture<ProductmasterUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductmasterUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductmasterUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
