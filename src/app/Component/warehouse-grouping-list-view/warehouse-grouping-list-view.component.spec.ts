import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseGroupingListViewComponent } from './warehouse-grouping-list-view.component';

describe('WarehouseGroupingListViewComponent', () => {
  let component: WarehouseGroupingListViewComponent;
  let fixture: ComponentFixture<WarehouseGroupingListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehouseGroupingListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseGroupingListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
