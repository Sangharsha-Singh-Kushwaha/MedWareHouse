import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMultiSelectDropdownComponent } from './app-multi-select-dropdown.component';

describe('AppMultiSelectDropdownComponent', () => {
  let component: AppMultiSelectDropdownComponent;
  let fixture: ComponentFixture<AppMultiSelectDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppMultiSelectDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppMultiSelectDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
