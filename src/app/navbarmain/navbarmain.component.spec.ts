import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarmainComponent } from './navbarmain.component';

describe('NavbarmainComponent', () => {
  let component: NavbarmainComponent;
  let fixture: ComponentFixture<NavbarmainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarmainComponent]
    });
    fixture = TestBed.createComponent(NavbarmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
