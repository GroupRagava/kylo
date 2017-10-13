/**
 * Created by development on 23/8/17.
 */
import {Component, OnInit} from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));
@Component({
  selector: 'app-demo-content-element-dialog',
  styles: [
    `img {
      max-width: 100%;
    }`
  ],
  template: `
    <h2 md-dialog-title>Create Project</h2>
    <md-dialog-content>
 
    </md-dialog-content>
    <md-dialog-actions>
         <span fxFlex></span>
            <button
        md-button
        color="warn"
        md-dialog-close>CANCEL</button>
            <button
        md-button
        color="primary"
        md-dialog-close="true">OK</button>
    </md-dialog-actions>
  `
})
export class DialogCreate implements OnInit {
  actionsAlignment: string;
  public form: FormGroup;

  constructor(public dialogRef: MdDialogRef<DialogCreate>, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      fname: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      email: [null, Validators.compose([Validators.required, CustomValidators.email])],
      range: [null, Validators.compose([Validators.required, CustomValidators.range([5, 9])])],
      url: [null, Validators.compose([Validators.required, CustomValidators.url])],
      date: [null, Validators.compose([Validators.required, CustomValidators.date])],
      creditCard: [null, Validators.compose([Validators.required, CustomValidators.creditCard])],
      phone: [null, Validators.compose([Validators.required, CustomValidators.phone('en-US')])],
      gender: [null, Validators.required],
      password: password,
      confirmPassword: confirmPassword
    });
  }

}
