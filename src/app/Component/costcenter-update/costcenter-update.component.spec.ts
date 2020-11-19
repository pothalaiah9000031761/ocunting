import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostcenterUpdateComponent } from './costcenter-update.component';

describe('CostcenterUpdateComponent', () => {
  let component: CostcenterUpdateComponent;
  let fixture: ComponentFixture<CostcenterUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostcenterUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostcenterUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
