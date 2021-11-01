import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthAdminComponent } from './auth-admin.component';

describe('AuthAdminComponent', () => {
  let component: AuthAdminComponent;
  let fixture: ComponentFixture<AuthAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
