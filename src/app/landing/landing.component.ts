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
  option:any;

  constructor(private route: ActivatedRoute, private router: Router) { 

    this.option={ 
        palette: "harmony light",
        colorizeGroups: false 
    };

    this.citiesPopulations = [{
      name: "Total: 12",
      items: [{
          value: 1,
          name: "New Visit",
          country: "New Visit"
      }, {
          value: 2,
          name: "Follow-up Visit",
          country: "Follow-up Visit"
      }, {
        value: 4,
        name: "Walk-In",
        country: "Walk-In"
      }, {
        value: 3,
        name: "FOMEMA",
        country: "FOMEMA"
      },{
          value: 6,
          name: "Referral",
          country: "Referral"
      }]
  }];
    this.citiesPopulations1 = [{
      name: "Total: 16",
      items: [{
          value: 12,
          name: "Walk-In",
          country: "Walk-In"
      }, {
        value: 2,
        name: "Follow-up Visit",
        country: "Follow-up Visit"
      }, {
        value: 3,
        name: "Lab test",
        country: "Lab test"
     }, {
          value: 1,
          name: "Collect Report",
          country: "Collect Report"
      }, {
          value: 2,
          name: "Referral",
          country: "Referral"
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
        value: 2,
        name: "Follow-up Visit",
        country: "Follow-up Visit"
      }, {
        value: 3,
        name: "Lab test",
        country: "Lab test"
      }, {
          value: 6,
          name: "Referral",
          country: "Referral"
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
          name: "Follow-up Visit",
          country: "Follow-up Visit"
      }, {
            value: 3,
            name: "Lab test",
            country: "Lab test"
      }, {
          value: 3,
          name: "Collect Report",
          country: "Collect Report"
      }]
  }];
  }

  ngOnInit() {
    
  }

  customizeTooltip(arg) {
    var data = arg.node.data;

    return {
        text: arg.node.isLeaf() ? ("<b>" + data.name +
            "</b><br/>Number of Patient: " + arg.valueText) : null
    };
  }

  quickSearch() {
    if (this.patient) {
      this.router.navigate(['/patient/', this.patient]);
    } else if (this.episode) {
      this.router.navigate(['/episode/', this.episode]);
    }
  }

}
