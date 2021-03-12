import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && isSubmitted);
  }
}
@Component({
  selector: 'app-form-title',
  templateUrl: './form-title.component.html',
  styleUrls: ['./form-title.component.scss']
})
export class FormTitleComponent implements OnInit {
  public isBtnSubmitted: boolean = false;
  public formTitleFields: FormGroup;

  public errorMessages = {
    errorMessageOne: 'Error message 1',
    errorMessageTwo: 'Error message 2',
    errorMessageThree: 'Error message 3',
    errorMessageFour: 'Error message 4',
    errorMessageFive: 'Error message 5'
  }

  public inputLabels = {
    label: 'Input Label'
  }

  public matcher = new MyErrorStateMatcher();

  constructor() { }

  public ngOnInit(): void {
    this.generateFormTitleFieldsForm();
  }

  public generateFormTitleFieldsForm(): void {
    this.formTitleFields = new FormGroup({
      inputLabelOne: new FormControl('', [Validators.required]),
      inputLabelTwo: new FormControl('', [Validators.required]),
      inputLabelThree: new FormControl('', [Validators.required]),
      inputLabelFour: new FormControl('', [Validators.required]),
      inputLabelFive: new FormControl('', [Validators.required])
    })
  }

  public submitForm(): void {
    this.isBtnSubmitted = true;

    if (this.formTitleFields.invalid) {
      this.formTitleFields.get('inputLabelOne')?.markAsTouched();
      this.formTitleFields.get('inputLabelTwo')?.markAsTouched();
      this.formTitleFields.get('inputLabelThree')?.markAsTouched();
      this.formTitleFields.get('inputLabelFour')?.markAsTouched();
      this.formTitleFields.get('inputLabelFive')?.markAsTouched();
    }
  }
}
