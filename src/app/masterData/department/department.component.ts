import { GDService } from './../../services/GDService.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup } from '@angular/forms';
import { MasterDataService } from "app/services/masterdata.service";

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  data: any = {};
  dataList: any = [];
  departmentID;

  constructor(private GDService: GDService, private MasterDataService: MasterDataService, private route: ActivatedRoute, private router: Router) {  
    route.params.subscribe(p=>{
      if (p['id']!=null)
        this.data.departmentID = +p['id'];
        if (this.data.departmentID)
        {
          this.retrieveData();
        }
    });
  }

  onRowSelect(event) {
    this.router.navigate(['/department/', event.selectedRowKeys[0].departmentID]);
  }

  retrieveData(){
      this.MasterDataService.GetDepartmentByID(this.data.departmentID)
      .subscribe(m => {
        this.data = m;
      }, err => {
        if (err.status == 404)
          this.GDService.openSnackBar('Record Not Found!','Close');
      } );
  }

  ngOnInit() {
    this.data.active = true;
      this.MasterDataService.GetDepartment()
        .subscribe(x => {
          this.dataList =x;
     });
  }

  onSave() {

    if (this.data.departmentID){
      this.MasterDataService.UpdateDepartmentByID(this.data)
        .subscribe(x => {
            this.GDService.openSnackBar('"' + x.departmentName + '" Updated Sucessfully!','Close');
      });
    }
    else
      this.MasterDataService.CreateDepartment(this.data)
        .subscribe(x => {
            this.GDService.openSnackBar('"' + x.departmentName + '" Created Sucessfully!','Close');
      });
  }

}
