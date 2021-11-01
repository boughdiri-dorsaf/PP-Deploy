import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishementsComponent } from './establishements.component';

describe('EstablishementsComponent', () => {
  let component: EstablishementsComponent;
  let fixture: ComponentFixture<EstablishementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstablishementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
