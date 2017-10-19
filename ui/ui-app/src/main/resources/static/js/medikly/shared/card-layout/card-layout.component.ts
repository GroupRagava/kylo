import { Component, OnInit, Directive, ElementRef } from '@angular/core';

@Directive({
    selector: 'mdk-card-layout-left-sidebar',
    host: {'class': 'mdk-card-left-sd'}
})
export class MdkCardLayoutLeftSidebarDirective {
    constructor(el: ElementRef) {

    }
}


@Directive({
    selector: 'mdk-card-layout-right-sidebar',
    host: {'class': 'mdk-card-right-sd'}
})
export class MdkCardLayoutRightSidebarDirective {
    constructor(el: ElementRef) {

    }
}

@Directive({
    selector: 'mdk-card-layout-content',
    host: {'class': 'mdk-card-content'}
})
export class MdkCardLayoutContentDirective {
    constructor(el: ElementRef) {

    }
}

@Component({
  selector: 'app-card-layout',
  templateUrl: 'js/medikly/shared/card-layout/card-layout.component.html',
  styleUrls: ['js/medikly/shared/card-layout/card-layout.component.scss']
})
export class CardLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
