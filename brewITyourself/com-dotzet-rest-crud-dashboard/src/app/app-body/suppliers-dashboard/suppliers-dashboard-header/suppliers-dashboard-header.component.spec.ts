import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersDashboardHeaderComponent } from './suppliers-dashboard-header.component';

describe('SuppliersDashboardHeaderComponent', () => {
  let component: SuppliersDashboardHeaderComponent;
  let fixture: ComponentFixture<SuppliersDashboardHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliersDashboardHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliersDashboardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
