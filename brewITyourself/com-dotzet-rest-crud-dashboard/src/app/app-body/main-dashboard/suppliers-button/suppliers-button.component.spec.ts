import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersButtonComponent } from './suppliers-button.component';

describe('SuppliersButtonComponent', () => {
  let component: SuppliersButtonComponent;
  let fixture: ComponentFixture<SuppliersButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliersButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliersButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
