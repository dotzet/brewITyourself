import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierReadFormComponent } from './supplier-read-form.component';

describe('SupplierReadFormComponent', () => {
  let component: SupplierReadFormComponent;
  let fixture: ComponentFixture<SupplierReadFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierReadFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierReadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
