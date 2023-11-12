import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageErrorComponent } from './user-page-error.component';

describe('UserPageErrorComponent', () => {
  let component: UserPageErrorComponent;
  let fixture: ComponentFixture<UserPageErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserPageErrorComponent]
    });
    fixture = TestBed.createComponent(UserPageErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
