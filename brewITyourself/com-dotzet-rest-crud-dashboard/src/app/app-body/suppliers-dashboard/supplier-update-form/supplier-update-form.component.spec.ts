import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierUpdateFormComponent } from './supplier-update-form.component';

describe('SupplierUpdateFormComponent', () => {
  let component: SupplierUpdateFormComponent;
  let fixture: ComponentFixture<SupplierUpdateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierUpdateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
