import { Component, OnInit, OnDestroy } from '@angular/core';
import {ToolbarService} from '../../core/toolbar/toolbar.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  //SideMenu
  mainMenu = [
    {icon: 'inbox', title: 'My reports', items:[{icon: 'folder', title: 'Folder 1'}, {icon: 'folder', title: 'Folder 2'}]},
    {icon: 'label', title: 'Labels', items: [{icon: 'label', title: 'Label 1'}, {icon: 'label', title: 'Label 2'}]}/*,
    {icon: 'people', title: 'Shared with Me'},
    {icon: 'access_time', title: 'Recent'},
    {icon: 'star_rate', title: 'Starred'},
    {icon: 'delete', title: 'Archive'}*/];

  constructor(private ts: ToolbarService) {
    ts.setTopSectionTitle('Projects');
    ts.setToolbarColor('dark-blue');
    ts.setSubMenuOptions(this.mainMenu);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.ts.restoreToolbarColor();
  }

}
