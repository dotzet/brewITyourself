import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierReadComponent } from './supplier-read.component';

describe('SupplierReadComponent', () => {
  let component: SupplierReadComponent;
  let fixture: ComponentFixture<SupplierReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
