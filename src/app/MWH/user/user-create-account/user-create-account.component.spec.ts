import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreateAccountComponent } from './user-create-account.component';

describe('UserCreateAccountComponent', () => {
  let component: UserCreateAccountComponent;
  let fixture: ComponentFixture<UserCreateAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCreateAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCreateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
