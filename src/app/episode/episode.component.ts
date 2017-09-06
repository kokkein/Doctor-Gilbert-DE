import { ActivatedRoute, Router } from '@angular/router';
import { MasterDataService } from './../services/masterdata.service';
import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {
  data: any = {}

  constructor(public snackBar: MdSnackBar, private MasterDataService: MasterDataService, private route: ActivatedRoute, private router: Router) {
    this.openSnackBar("error","errorrrrr");
    route.params.subscribe(p=>{
      if (p['id']!=null)
        this.data.visitID = +p['id'];
        if (this.data.patientID)
        {
          this.retrieveData();
        }
    });
  
  }
  
  retrieveData(){
    this.MasterDataService.GetPatientByID(this.data.patientID)
    .subscribe(m => {
      this.data = m;
      if (m.patientEmergencyResources == null)
        this.data.patientEmergencyResources = {};
      if (this.data.patientPolicyResources == null)
        this.data.patientPolicyResources = {};
      if (this.data.patientEmployeeResources == null)
        this.data.patientEmployeeResources = {};

    }, err => {
      //if (err.status == 404)
        this.openSnackBar("error","errorrrrr");
    } );
}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit() {
  }

  patientDetails = [
    { property: 'Visit ID', value: 'VIT00010020',},
    { property: 'Visit Date-Time', value: '01-02-2016 10:30AM',},
    { property: 'Payment Mode', value: 'AIA Premium Policy, AIA Berhard',}
  ];

  warnings = [
    { value: 'Nuts',},
    { value: 'Panadol, Uphamol, Paraceptamol',}
  ];

}
