/**
 * Created by development on 26/9/17.
 */
import {Component, OnInit} from '@angular/core';
//import * as Quill from 'quill';

@Component({
  selector: 'app-project-summary',
  templateUrl: 'js/medikly/project-workspace/project-summary/project-summary.component.html',
  styleUrls: ['js/medikly/project-workspace/project-summary/project-summary.component.scss']
})
export class ProjectSummaryComponent implements OnInit{


  constructor() {
  }

  ngOnInit() {
/*    const quill = new Quill('#editor-container', {
      modules: {
        toolbar: {
          container: '#toolbar-toolbar'
        }
      },
      placeholder: 'Compose an epic...',
      theme: 'snow'
    });*/
  }

}
