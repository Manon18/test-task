import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioInputFieldsComponent } from './radio-input-fields.component';

describe('RadioInputFieldsComponent', () => {
  let component: RadioInputFieldsComponent;
  let fixture: ComponentFixture<RadioInputFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioInputFieldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioInputFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
