import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreParamComponent } from './score-param.component';

describe('ScoreParamComponent', () => {
  let component: ScoreParamComponent;
  let fixture: ComponentFixture<ScoreParamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreParamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
