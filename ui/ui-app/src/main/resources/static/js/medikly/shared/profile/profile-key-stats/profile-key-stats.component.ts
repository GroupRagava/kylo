import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-profile-key-stats',
  templateUrl: './profile-key-stats.component.html',
  styleUrls: ['./profile-key-stats.component.scss']
})
export class ProfileKeyStatsComponent implements OnInit {

  @Input('profile') profile: any;

  constructor() { }

  ngOnInit() {
  }

}
