import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateallVendorsComponent } from './updateall-vendors.component';

describe('UpdateallVendorsComponent', () => {
  let component: UpdateallVendorsComponent;
  let fixture: ComponentFixture<UpdateallVendorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateallVendorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateallVendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
