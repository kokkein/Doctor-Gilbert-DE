import { GDService } from './../services/GDService.service';
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
  data: any = {
    insuranceResource: {},
    payorResource: {},
    patientResource: {}
  }
  patientVisit;


  constructor(private GDService: GDService, private MasterDataService: MasterDataService, private route: ActivatedRoute, private router: Router) {
    route.params.subscribe(p=>{
      if (p['id']!=null)
        this.data.visitID = +p['id'];
        if (this.data.visitID)
        {
          this.retrieveData();
        }
        else{
          this.data.visitID =1;
          this.retrieveData();
        }
    });
  
  }
  
  retrieveData(){
    this.MasterDataService.GetVisitByID(this.data.visitID)
    .subscribe(i =>{
      this.data = i;
      if (i.insuranceResource == null)
        this.data.insuranceResource = {};
      if (i.payorResource == null)
        this.data.payorResource = {};
      if (i.patientResource == null)
        this.data.patientResource = {};
      //this.patientVisit = [{patientID: this.data.patientID ,visitID: this.data.visitID}];
    }, err => {
      if (err.status == 404)
        this.GDService.openSnackBar(err,'Close');
    } );

}

  openSnackBar(message: string, action: string) {
    this.GDService.snackBar.open(message, action, {
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
