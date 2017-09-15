import { GDService } from './../../services/GDService.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup } from '@angular/forms';
import { MasterDataService } from "app/services/masterdata.service";

@Component({
  selector: 'app-payor',
  templateUrl: './payor.component.html',
  styleUrls: ['./payor.component.css']
})
export class PayorComponent implements OnInit {

  data: any = {};
  dataList: any = [];
  payorID;
  countries;
  states;

  constructor(private GDService: GDService, private MasterDataService: MasterDataService, private route: ActivatedRoute, private router: Router) { 
      route.params.subscribe(p=>{
      if (p['id']!=null)
        this.data.payorID = +p['id'];
        if (this.data.payorID)
        {
          this.retrieveData();
        }
    });
  }

  retrieveData(){
      this.MasterDataService.GetPayorByID(this.data.payorID)
      .subscribe(m => {
        this.data = m;
      }, err => {
        if (err.status == 404)
        this.GDService.openSnackBar('Record Not Found!','Close');
      } );
  }

  ngOnInit() {
    this.MasterDataService.GetCountry().subscribe(countries => {
    this.countries = countries;});

    this.MasterDataService.GetState().subscribe(states => {
    this.states = states;});
    
    this.MasterDataService.GetPayor()
    .subscribe(x => {
      this.dataList =x;
     });
  }

  onRowSelect(event) {
    this.router.navigate(['/payor/', event.selectedRowKeys[0].payorID]);
  }

  onSave() {

    if (this.data.payorID){
      this.MasterDataService.UpdatePayorByID(this.data)
        .subscribe(x => {
            this.GDService.openSnackBar('"' + x.payorName + '" Updated Sucessfully!','Close');
      });
    }
    else
      this.MasterDataService.CreatePayor(this.data)
        .subscribe(x => {
            this.GDService.openSnackBar('"' + x.payorName + '" Created Sucessfully!','Close');
      });
  }


}
