import { GDService } from './../../services/GDService.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup } from '@angular/forms';
import { MasterDataService } from "app/services/masterdata.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-mohvisit-type',
  templateUrl: './mohvisit-type.component.html',
  styleUrls: ['./mohvisit-type.component.css']
})
export class MOHVisitTypeComponent implements OnInit {

  data: any = {};
  dataList: any = [];
  mohVisitTypeID;
  
  constructor(private GDService: GDService, private MasterDataService: MasterDataService, private route: ActivatedRoute, private router: Router) {  
    route.params.subscribe(p=>{
      if (p['id']!=null)
        this.data.mohVisitTypeID = +p['id'];
        if (this.data.mohVisitTypeID)
        {
          this.retrieveData();
        }
    });
  }

  retrieveData(){
      this.MasterDataService.GetMOHVisitTypeByID(this.data.mohVisitTypeID)
      .subscribe(m => {
        this.data = m;
      }, err => {
        if (err.status == 404)
          this.GDService.openSnackBar('Record Not Found!','Info');
      } );
  }

  ngOnInit() {
    this.data.active = true;
      this.MasterDataService.GetMOHVisitType()
        .subscribe(x => {
          this.dataList =x;
     });

  }

  onRowSelect(event) {
      this.router.navigate(['/mohvisit-type/', event.selectedRowKeys[0].mohVisitTypeID]);
  }

  onSave() {

    if (this.data.mohVisitTypeID){
      this.MasterDataService.UpdateMOHVisitTypeByID(this.data)
        .subscribe(x => {
            this.GDService.openSnackBar('"' + x.mohVisitTypeName + '" Updated Sucessfully!','Info');
      });
    }
    else
      this.MasterDataService.CreateMOHVisitType(this.data)
        .subscribe(x => {
            this.GDService.openSnackBar('"' + x.mohVisitTypeName + '" Created Sucessfully!','Info');
      });
  }
}
