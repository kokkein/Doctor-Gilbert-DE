import { GDService } from './../services/GDService.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup } from '@angular/forms';
import { MasterDataService } from "app/services/masterdata.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    titles: any = [];
    specialities: any = [];
    states: any = [];
    countries: any = [];
    data: any = {};
    dataList: any = [];
    dgUserID;

  constructor(private GDService: GDService, private MasterDataService: MasterDataService, private route: ActivatedRoute, private router: Router) {  
    route.params.subscribe(p=>{
      if (p['id']!=null)
        this.data.dgUserID = +p['id'];
        if (this.data.dgUserID)
        {
          this.retrieveData();
        }
    });
  }

  retrieveData(){
      this.MasterDataService.GetDGUserByID(this.data.dgUserID)
      .subscribe(m => {
        this.data = m;
      }, err => {
        if (err.status == 404)
          this.GDService.openSnackBar('Record Not Found!','Info');
      } );
  }

  onRowSelect(event) {
    this.router.navigate(['/user/', event.selectedRowKeys[0].dgUserID]);
  }
  ngOnInit() {
    this.data.active = true;
      this.MasterDataService.GetDGUser()
        .subscribe(x => {
          this.dataList =x;
     });
      this.MasterDataService.GetTitle()
        .subscribe(x => {
          this.titles =x;
     });
      this.MasterDataService.GetState()
        .subscribe(x => {
          this.states =x;
     });
      this.MasterDataService.GetCountry()
        .subscribe(x => {
          this.countries =x;
     });
      this.MasterDataService.GetSpeciality()
        .subscribe(x => {
          this.specialities =x;
     });
  }

  onSave() {

    if (this.data.dgUserID){
      this.MasterDataService.UpdateDGUserByID(this.data)
        .subscribe(x => {
            this.GDService.openSnackBar('"' + x.userFullName + '" Updated Sucessfully!','Info');
      });
    }
    else
      this.MasterDataService.CreateDGUser(this.data)
        .subscribe(x => {
            this.GDService.openSnackBar('"' + x.userFullName + '" Created Sucessfully!','Info');
            
      });
  }

}

