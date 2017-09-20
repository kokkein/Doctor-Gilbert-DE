import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DxTreeMapModule } from 'devextreme-angular';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  patient;
  episode;
  citiesPopulations:any;
  citiesPopulations1:any;
  citiesPopulations2:any;
  citiesPopulations3:any;

  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor(private route: ActivatedRoute, private router: Router) { 

    this.citiesPopulations = [{
      name: "Total: 12",
      items: [{
          value: 1,
          name: "New Visit",
          country: "New Visit"
      }, {
          value: 2,
          name: "Routine Visit",
          country: "Routine Visit"
      }, {
          value: 6,
          name: "FOMEMA",
          country: "FOMEMA"
      }]
  }];
    this.citiesPopulations1 = [{
      name: "Total: 16",
      items: [{
          value: 12,
          name: "New Visit",
          country: "New Visit"
      }, {
          value: 2,
          name: "Routine Visit",
          country: "Routine Visit"
      }, {
          value: 2,
          name: "FOMEMA",
          country: "FOMEMA"
      }]
  }];
    this.citiesPopulations2 = [{
      name: "Total: 8",
      items: [{
          value: 2,
          name: "New Visit",
          country: "New Visit"
      }, {
          value: 2,
          name: "Routine Visit",
          country: "Routine Visit"
      }, {
          value: 6,
          name: "FOMEMA",
          country: "FOMEMA"
      }]
  }];
    this.citiesPopulations3 = [{
      name: "Total: 3",
      items: [{
          value: 1,
          name: "New Visit",
          country: "New Visit"
      }, {
          value: 2,
          name: "Routine Visit",
          country: "Routine Visit"
      }, {
          value: 3,
          name: "FOMEMA",
          country: "FOMEMA"
      }]
  }];
  }

  ngOnInit() {
  }

  quickSearch() {
    if (this.patient) {
      this.router.navigate(['/patient/', this.patient]);
    } else if (this.episode) {
      this.router.navigate(['/episode/', this.episode]);
    }
  }

}
