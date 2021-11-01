import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMasterdashboardComponent } from './admin-masterdashboard.component';

describe('AdminMasterdashboardComponent', () => {
  let component: AdminMasterdashboardComponent;
  let fixture: ComponentFixture<AdminMasterdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMasterdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMasterdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
