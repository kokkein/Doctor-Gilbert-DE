import { GDService } from './../../services/GDService.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup } from '@angular/forms';
import { MasterDataService } from "app/services/masterdata.service";

@Component({
  selector: 'app-speciality',
  templateUrl: './speciality.component.html',
  styleUrls: ['./speciality.component.css']
})
export class SpecialityComponent implements OnInit {
  data: any = {};
  dataList: any = [];
  specialityID;

  constructor(private GDService: GDService, private MasterDataService: MasterDataService, private route: ActivatedRoute, private router: Router) {  
    route.params.subscribe(p=>{
      if (p['id']!=null)
        this.data.specialityID = +p['id'];
        if (this.data.specialityID)
        {
          this.retrieveData();
        }
    });
  }
  onRowSelect(event) {
    this.router.navigate(['/speciality/', event.selectedRowKeys[0].specialityID]);
  }
  retrieveData(){
      this.MasterDataService.GetSpecialityByID(this.data.specialityID)
      .subscribe(m => {
        this.data = m;
      }, err => {
        if (err.status == 404)
          this.GDService.openSnackBar('Record Not Found!','Close');
      } );
  }

  ngOnInit() {
    this.data.active = true;
      this.MasterDataService.GetSpeciality()
        .subscribe(x => {
          this.dataList =x;
     });
  }

  onSave() {

    if (this.data.specialityID){
      this.MasterDataService.UpdateSpecialityByID(this.data)
        .subscribe(x => {
            this.GDService.openSnackBar('"' + x.specialityName + '" Updated Sucessfully!','Close');
      });
    }
    else
      this.MasterDataService.CreateSpeciality(this.data)
        .subscribe(x => {
            this.GDService.openSnackBar('"' + x.specialityName + '" Created Sucessfully!','Close');
      });
  }

}
