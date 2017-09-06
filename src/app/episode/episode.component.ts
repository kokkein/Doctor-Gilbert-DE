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
  patientData: any = {}

  constructor(public snackBar: MdSnackBar, private MasterDataService: MasterDataService, private route: ActivatedRoute, private router: Router) {
    route.params.subscribe(p=>{
      if (p['id']!=null)
        this.data.visitID = +p['id'];
        if (this.data.visitID)
        {
          this.retrieveData();
        }
    });
  
  }
  
  retrieveData(){
    this.MasterDataService.GetVisitByID(this.data.visitID)
    .subscribe(i =>{
      this.data = i;
        this.MasterDataService.GetPatientByID(i.patientID)
        .subscribe(m => {
          this.patientData = m;
        }, err => {
          if (err.status == 404)
            this.openSnackBar(err,'Close');
        } );

    }, err => {
      if (err.status == 404)
        this.openSnackBar(err,'Close');
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
