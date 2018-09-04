import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthCoursesComponent } from './auth-courses.component';

describe('AuthCoursesComponent', () => {
  let component: AuthCoursesComponent;
  let fixture: ComponentFixture<AuthCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
