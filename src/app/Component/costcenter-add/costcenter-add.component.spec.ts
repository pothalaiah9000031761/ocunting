import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostcenterAddComponent } from './costcenter-add.component';

describe('CostcenterAddComponent', () => {
  let component: CostcenterAddComponent;
  let fixture: ComponentFixture<CostcenterAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostcenterAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostcenterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
