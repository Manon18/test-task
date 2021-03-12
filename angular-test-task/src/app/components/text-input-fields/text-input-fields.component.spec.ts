import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputFieldsComponent } from './text-input-fields.component';

describe('TextInputFieldsComponent', () => {
  let component: TextInputFieldsComponent;
  let fixture: ComponentFixture<TextInputFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextInputFieldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInputFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
