import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostcenterViewComponent } from './costcenter-view.component';

describe('CostcenterViewComponent', () => {
  let component: CostcenterViewComponent;
  let fixture: ComponentFixture<CostcenterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostcenterViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostcenterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
