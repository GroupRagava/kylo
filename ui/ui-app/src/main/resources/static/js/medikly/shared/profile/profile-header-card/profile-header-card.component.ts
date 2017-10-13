import { Component, OnInit, Input} from '@angular/core';
// import {environment} from '../../../../environments/environment';



@Component({
  selector: 'app-profile-header-card',
  templateUrl: './profile-header-card.component.html',
  styleUrls: ['./profile-header-card.component.scss']
})
export class ProfileHeaderCardComponent implements OnInit {

  @Input('profile') profile: any;
  @Input('coverImage') coverImage: string;
  googleApiKey: string = 'abc';

  socialNetworks = [
      {name: 'linkedin', 'icon': 'ion-social-linkedin', mouseOvered: false},
      {name: 'facebook', 'icon': 'ion-social-facebook', mouseOvered: false},
      {name: 'twitter', 'icon': 'ion-social-twitter', mouseOvered: false},
      {name: 'googleplus', 'icon': 'ion-social-googleplus', mouseOvered: false}
      ];
  constructor() { }

  ngOnInit() {
  }

}
