import { GDService } from './../../services/GDService.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup } from '@angular/forms';
import { MasterDataService } from "app/services/masterdata.service";


@Component({
  selector: 'app-purpose-of-visit',
  templateUrl: './purpose-of-visit.component.html',
  styleUrls: ['./purpose-of-visit.component.css']
})
export class PurposeOfVisitComponent implements OnInit {

  data: any = {};
  dataList: any = [];
  visitPurposeID;

  constructor(private GDService: GDService, private MasterDataService: MasterDataService, private route: ActivatedRoute, private router: Router) {  
    route.params.subscribe(p=>{
      if (p['id']!=null)
        this.data.visitPurposeID = +p['id'];
        if (this.data.visitPurposeID)
        {
          this.retrieveData();
        }
    });
  }

  retrieveData(){
      this.MasterDataService.GetPurposeOfVisitByID(this.data.visitPurposeID)
      .subscribe(m => {
        this.data = m;
      }, err => {
        if (err.status == 404)
          this.GDService.openSnackBar('Record Not Found!','Close');
      } );
  }

  ngOnInit() {
    this.data.active = true;
      this.MasterDataService.GetPurposeOfVisit()
        .subscribe(x => {
          this.dataList =x;
     });

  }

  onRowSelect(event) {
      this.router.navigate(['/purpose-of-visit/', event.selectedRowKeys[0].visitPurposeID]);
  }

  onSave() {

    if (this.data.visitPurposeID){
      this.MasterDataService.UpdatePurposeOfVisitByID(this.data)
        .subscribe(x => {
            this.GDService.openSnackBar('"' + x.visitPurposeName + '" Updated Sucessfully!','Close');
      });
    }
    else
      this.MasterDataService.CreatePurposeOfVisit(this.data)
        .subscribe(x => {
            this.GDService.openSnackBar('"' + x.visitPurposeName + '" Created Sucessfully!','Close');
      });
  }
}
