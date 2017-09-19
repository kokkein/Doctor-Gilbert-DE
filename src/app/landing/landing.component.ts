import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  patient;
  episode;

  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  searchPatient() {
    if (this.patient) {
      this.router.navigate(['/patient/', this.patient]);
    }
  }
  searchEpisode() {
    if (this.episode) {
      this.router.navigate(['/episode/', this.episode]);
    }
  }

}
