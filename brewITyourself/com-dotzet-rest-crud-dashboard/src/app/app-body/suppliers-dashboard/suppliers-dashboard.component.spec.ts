import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersDashboardComponent } from './suppliers-dashboard.component';

describe('SuppliersDashboardComponent', () => {
  let component: SuppliersDashboardComponent;
  let fixture: ComponentFixture<SuppliersDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliersDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliersDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
