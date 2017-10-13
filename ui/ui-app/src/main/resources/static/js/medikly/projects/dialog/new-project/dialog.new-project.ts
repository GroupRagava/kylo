/**
 * Created by development on 18/9/17.
 */
/**
 * Created by development on 23/8/17.
 */
import {Component, OnInit} from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

import { Router } from '@angular/router';


@Component({
  selector: 'app-content-element-dialog',
  styleUrls: ['dialog.new-project.scss'],
  templateUrl: './dialog.new-project.html'
})
export class DialogNewProject implements OnInit {
  actionsAlignment: string;
  public form: FormGroup;
  privacy: string = "open";
  maxName: number = 60;
  maxObjective: number = 120;

  constructor(public dialogRef: MdDialogRef<DialogNewProject>, private fb: FormBuilder, public router: Router) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(this.maxName)])],
      objective: [null, Validators.compose([Validators.minLength(2), Validators.maxLength(this.maxObjective)])],
      privacy: [null, Validators.required],
    });
  }

  openProjectTemplate(){
    console.log('cerrado');
    this.dialogRef.close();
    this.router.navigate(['/projects/view/'+0]);
  }

}
