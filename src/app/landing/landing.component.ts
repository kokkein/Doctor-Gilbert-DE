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
