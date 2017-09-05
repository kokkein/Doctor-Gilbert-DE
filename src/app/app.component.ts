import { Component, AnimationTransitionEvent, ViewEncapsulation, ElementRef } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig} from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  navItems = [
    {name: 'Landing', route: 'landing'},
    {name: 'Appointment', route: 'appointment'},
    {name: 'Episode', route: 'episode'},
    {name: 'Patient', route: 'patient'},
    {name: 'Visit', route: 'visit'},
    {name: 'Billing', route: 'button-toggle'},
    {name: 'Medical Calculator', route: 'card'},
    {name: 'Master Data', route: 'master-data'}
  ];

  selectedOption: string;

  constructor(private AuthService: AuthService, private _element: ElementRef, public dialog: MdDialog, private router: Router) {
    AuthService.handleAuthentication();
  }

  toggleMenu() {
    let dialogRef = this.dialog.open(DialogResultExampleDialog);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }

  toggleMasterData(){
    this.router.navigate(['/master-data']);
  }

  toggleFullscreen() {
    let elem = this._element.nativeElement.querySelector('.demo-content');
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullScreen) {
      elem.webkitRequestFullScreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.msRequestFullScreen) {
      elem.msRequestFullScreen();
    }
  }


 }

@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: './dialog-result-example-dialog.html',
})
export class DialogResultExampleDialog {
  constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>) {}
    Items = [
    {name: 'Billing', route: 'button-toggle'},
    {name: 'Medical Record', route: 'card'},
    {name: 'Medical Calculator', route: 'card'},
    {name: 'User Profile', route: 'profile'}
  ];
}