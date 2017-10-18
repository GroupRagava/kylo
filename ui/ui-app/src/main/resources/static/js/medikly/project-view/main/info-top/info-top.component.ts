import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-project-info-top',
    templateUrl: './info-top.component.html',
    styleUrls: ['./info-top.component.scss']
})
export class InfoTopComponent implements OnInit {

    @Input() documentId: any;
    @Input('projectName') projectName = 'Project Name';
    params: any;

    constructor(private route: ActivatedRoute) {
      // subscribe to router event
      this.params = this.route.queryParams.subscribe(
        params => {
          let name = params['name'];
          if (name) this.projectName = name;
        }
      );
    }

    ngOnInit() {
    }

}
