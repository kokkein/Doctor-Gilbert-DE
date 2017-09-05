import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth0-user-profile',
  templateUrl: './auth0-user-profile.component.html',
  styleUrls: ['./auth0-user-profile.component.css']
})
export class Auth0UserProfileComponent implements OnInit {

  profile: any;
  
    constructor(public auth: AuthService) { }
  
    ngOnInit() {
      if (this.auth.userProfile) {
        this.profile = this.auth.userProfile;
      } else {
        this.auth.getProfile((err, profile) => {
          this.profile = profile;
        });
      }
    }
  
  }