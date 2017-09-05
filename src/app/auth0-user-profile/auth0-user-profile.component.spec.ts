import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Auth0UserProfileComponent } from './auth0-user-profile.component';

describe('Auth0UserProfileComponent', () => {
  let component: Auth0UserProfileComponent;
  let fixture: ComponentFixture<Auth0UserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Auth0UserProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Auth0UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
