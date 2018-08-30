import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthdeskComponent } from './authdesk.component';

describe('AuthdeskComponent', () => {
  let component: AuthdeskComponent;
  let fixture: ComponentFixture<AuthdeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthdeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthdeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
