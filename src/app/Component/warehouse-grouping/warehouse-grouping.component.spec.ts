import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseGroupingComponent } from './warehouse-grouping.component';

describe('WarehouseGroupingComponent', () => {
  let component: WarehouseGroupingComponent;
  let fixture: ComponentFixture<WarehouseGroupingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehouseGroupingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseGroupingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
