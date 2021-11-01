import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMasterMenuComponent } from './admin-master-menu.component';

describe('AdminMasterMenuComponent', () => {
  let component: AdminMasterMenuComponent;
  let fixture: ComponentFixture<AdminMasterMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMasterMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMasterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
