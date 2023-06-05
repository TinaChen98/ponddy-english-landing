import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingTwoComponent } from './landing-two.component';

describe('LandingTwoComponent', () => {
  let component: LandingTwoComponent;
  let fixture: ComponentFixture<LandingTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
