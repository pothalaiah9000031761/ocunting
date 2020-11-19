import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdategroupingcustomerComponent } from './updategroupingcustomer.component';

describe('UpdategroupingcustomerComponent', () => {
  let component: UpdategroupingcustomerComponent;
  let fixture: ComponentFixture<UpdategroupingcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdategroupingcustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdategroupingcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
