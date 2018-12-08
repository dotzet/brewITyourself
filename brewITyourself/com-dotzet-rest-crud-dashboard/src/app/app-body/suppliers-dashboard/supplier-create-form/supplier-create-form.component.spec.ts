import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierCreateFormComponent } from './supplier-create-form.component';

describe('SupplierCreateFormComponent', () => {
  let component: SupplierCreateFormComponent;
  let fixture: ComponentFixture<SupplierCreateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierCreateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
