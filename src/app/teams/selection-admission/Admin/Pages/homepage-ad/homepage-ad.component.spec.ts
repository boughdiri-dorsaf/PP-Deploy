import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageAdComponent } from './homepage-ad.component';

describe('HomepageAdComponent', () => {
  let component: HomepageAdComponent;
  let fixture: ComponentFixture<HomepageAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
