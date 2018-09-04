import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadcoursesComponent } from './uploadcourses.component';

describe('UploadcoursesComponent', () => {
  let component: UploadcoursesComponent;
  let fixture: ComponentFixture<UploadcoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadcoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
