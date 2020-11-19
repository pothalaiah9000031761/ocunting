import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallVendorsComponent } from './getall-vendors.component';

describe('GetallVendorsComponent', () => {
  let component: GetallVendorsComponent;
  let fixture: ComponentFixture<GetallVendorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallVendorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallVendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
