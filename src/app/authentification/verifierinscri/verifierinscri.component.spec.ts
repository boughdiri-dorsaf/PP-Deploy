import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifierinscriComponent } from './verifierinscri.component';

describe('VerifierinscriComponent', () => {
  let component: VerifierinscriComponent;
  let fixture: ComponentFixture<VerifierinscriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifierinscriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifierinscriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
