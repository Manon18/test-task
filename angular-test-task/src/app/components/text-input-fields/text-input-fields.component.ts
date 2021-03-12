import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-text-input-fields',
  templateUrl: './text-input-fields.component.html',
  styleUrls: ['./text-input-fields.component.scss']
})
export class TextInputFieldsComponent implements OnInit {
  public value: string = 'Text entered, the input field is completed';
  public textFields: FormGroup;

  public inputStatesFields = {
    default: 'Default',
    focused: 'Focused',
    completed: 'Completed',
    autoclear: 'Autoclear',
    errorF: 'Error',
    disabled: 'Disabled'
  }

  public inputLabels = {
    label: 'Input Label'
  }

  public errorMessage = {
    errorM: 'Error message'
  }

  constructor() { }

  public ngOnInit(): void {
    this.generateTextFieldsForm();
  }

  public generateTextFieldsForm(): void {
    this.textFields = new FormGroup({
      default: new FormControl('', []),
      focused: new FormControl('', []),
      completed: new FormControl('Text entered, the input field is completed ', []),
      autoclear: new FormControl('', []),
      errorField: new FormControl('', [Validators.required]),
      disabled: new FormControl({ value: '', disabled: true }, [])
    })
  }

  get formTextFieldsControls() {
    return this.textFields['controls'];
  }
}
