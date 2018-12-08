import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierDeleteFormComponent } from './supplier-delete-form.component';

describe('SupplierDeleteFormComponent', () => {
  let component: SupplierDeleteFormComponent;
  let fixture: ComponentFixture<SupplierDeleteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierDeleteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierDeleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
