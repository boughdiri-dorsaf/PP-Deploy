import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageAdminMasterComponent } from './homepage-admin-master.component';

describe('HomepageAdminMasterComponent', () => {
  let component: HomepageAdminMasterComponent;
  let fixture: ComponentFixture<HomepageAdminMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageAdminMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageAdminMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
