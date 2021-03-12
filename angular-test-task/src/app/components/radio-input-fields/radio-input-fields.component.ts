import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-input-fields',
  templateUrl: './radio-input-fields.component.html',
  styleUrls: ['./radio-input-fields.component.scss']
})
export class RadioInputFieldsComponent implements OnInit {
  public isDisabled: boolean = true;
  public isChecked: boolean = true;

  public radioInputs = {
    radioInputsTitle: 'Radio Inputs',
    enabledUnselected: 'Enabled Unselected',
    radioinputText: 'Radioinput Text',
    enabledSelected: 'Enabled Selected',
    disabledUnselected: 'Disabled Unselected',
    disabledSelected: 'Disabled Selected'
  }

  constructor() { }

  public ngOnInit(): void {
  }

}
