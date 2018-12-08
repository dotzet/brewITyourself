import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDashboardCrumbComponent } from './main-dashboard-crumb.component';

describe('MainDashboardCrumbComponent', () => {
  let component: MainDashboardCrumbComponent;
  let fixture: ComponentFixture<MainDashboardCrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDashboardCrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDashboardCrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
