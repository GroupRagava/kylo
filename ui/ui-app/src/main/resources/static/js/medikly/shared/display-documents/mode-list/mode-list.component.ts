/**
 * Created by development on 23/8/17.
 */
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import { DialogRemoveFile } from '../../../shared/dialog/dialog-remove-file.component';
import { DialogRenameFile } from '../../../shared/dialog/dialog-rename-file.component';
import { DisplayDocumentsService } from '../display-documents.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-display-mode-list',
  templateUrl: 'mode-list.component.html',
  styleUrls: ['./mode-list.component.scss']
})
export class ModeListComponent implements OnInit, OnDestroy {
  displayMode = 'default';
  multi = false;
  hideToggle = true;
  date: any;
  @Input('documents') documents: any = [];
  num = 1;
  selectedOption: string;

  order: string = 'file_name';
  reverse: boolean = false;

  //Card Mode and List Mode
  modeCard: boolean = false;
  @Input('titleMode') titleMode: string = 'Recent Projects';
  index1 = 3;
  index2 = 11;
  index3 = 25;

  subscription: Subscription;

  constructor(public dialog: MdDialog, private dds: DisplayDocumentsService) {
    this.date = new Date();

    this.titleMode = this.dds.getTitleMode();

    this.dds.documents$.subscribe(
      data => {
        this.documents = data;
      });
    this.dds.reverse$.subscribe(
      data => {
        this.reverse = data;
      });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.dds.setDocuments(this.documents);
    this.dds.setTitleMode(this.titleMode);
  }

  isOver(): boolean {
    return window.matchMedia(`(max-width: 960px)`).matches;
  }

  isMac(): boolean {
    let bool = false;
    if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
      bool = true;
    }
    return bool;
  }

  //Dialog Rename File
  openDialogRenameFile(document) {
    let dialogRef = this.dialog.open(DialogRenameFile);
    dialogRef.componentInstance.currentName = document.name;
    dialogRef.afterClosed().subscribe(result => {
      if (result) document.name = result;
    });
  }

  //Dialog Remove File
  openDialogRemoveFile(file) {
    let dialogRef = this.dialog.open(DialogRemoveFile);
    dialogRef.componentInstance.file = file;
    dialogRef.afterClosed().subscribe(result => {
      if (result) this.removeFile(file);
    });
  }
  removeFile(file) {
    let index: number = this.documents.indexOf(file);
    if (index !== -1) {
      this.documents.splice(index, 1);
    }
  }

}
