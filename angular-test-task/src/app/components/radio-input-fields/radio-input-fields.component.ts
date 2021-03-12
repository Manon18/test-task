import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-input-fields',
  templateUrl: './radio-input-fields.component.html',
  styleUrls: ['./radio-input-fields.component.scss']
})
export class RadioInputFieldsComponent implements OnInit {
  public isDisabled: boolean = true;
  public isChecked: boolean = true;

  constructor() { }

  public ngOnInit(): void {
  }

}
