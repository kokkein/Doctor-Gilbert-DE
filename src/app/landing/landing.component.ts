import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DxTreeMapModule } from 'devextreme-angular'; 
import { Message } from 'primeng/primeng';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup } from '@angular/forms';
import { MasterDataService } from "app/services/masterdata.service";
import 'rxjs/add/operator/startWith';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  patient;
  citiesPopulations:any;
  citiesPopulations1:any;
  citiesPopulations2:any;
  citiesPopulations3:any;
  option:any;

  episodeCtrl: FormControl;
  filteredEpisode: Observable<any[]>;
  episode: any[] = [];
  patients;
  patientCtrl: FormControl;
  filteredPatients: Observable<any[]>;

  constructor(private MasterDataService: MasterDataService, private route: ActivatedRoute, private router: Router) { 

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

  displayEpisodeFn(value: any): string {
    return value && typeof value === 'object' ? value.visitNo : value;
  }
  displayPatientFn(value: any): string {
    return value && typeof value === 'object' ? value.name : value;
  }
  filterEpisode(val: string) {
    return val ? this.episode.filter((s) => new RegExp(val, 'gi').test(s.visitNo))
    : this.episode;
  }
  filterPatients(val: string) {
    return val ? this.patients.filter((s) => new RegExp(val, 'gi').test(s.name))
               : this.patients;
  }

  ngOnInit() {
    this.episodeCtrl = new FormControl({visitID: 0, visitNo: ''});
    this.patientCtrl = new FormControl({patientID: 0, name: ''});

    this.filteredPatients = this.patientCtrl.valueChanges
    .debounceTime(400)
    .do(value => {
       this.MasterDataService.GetPatientBySearch(value).subscribe(res => { this.patient = res; 
      }); 
    }).delay(500).map(() => this.patient);

    this.filteredEpisode= this.episodeCtrl.valueChanges
    .debounceTime(400)
    .do(value => {
       this.MasterDataService.GetVisitBySearch(value).subscribe(res => { this.episode = res; 
      }); 
    }).delay(500).map(() => this.episode);
  }

  customizeTooltip(arg) {
    var data = arg.node.data;

    return {
        text: arg.node.isLeaf() ? ("<b>" + data.name +
            "</b><br/>Number of Patient: " + arg.valueText) : null
    };
  }

  quickSearch() {

    if (this.patientCtrl.value.patientID > 0) {
      this.router.navigate(['/patient/', this.patientCtrl.value.patientID]);
    } else if (this.episodeCtrl.value.visitID > 0) {
      this.router.navigate(['/episode/', this.episodeCtrl.value.visitID]);
    }
  }

}
