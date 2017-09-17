import { GDService } from './../../services/GDService.service';
import { MasterDataService } from './../../services/masterdata.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/startWith';
import { Observable } from 'rxjs/Observable';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {

  payors;
  payorCtrl: FormControl;
  filteredPayors: any;
  data: any = {};
  dataList: any = [];
  insuranceID;
  test;

  constructor(private GDService: GDService, private MasterDataService: MasterDataService, private route: ActivatedRoute, private router: Router) { 
    this.payorCtrl = new FormControl({payorID: 0, payorName: ''});

    route.params.subscribe(p=>{
      if (p['id']!=null)
        this.data.insuranceID = +p['id'];
        if (this.data.insuranceID)
        {
          this.retrieveData();
        }
    });
  
  }

  displayPayorFn(value: any): string {
    return value && typeof value === 'object' ? value.payorName : value;
  }
  filterPayors(val: string) {
    //`^${val}`
    return val ? this.payors.filter((s) => new RegExp(val, 'gi').test(s.payorName))
               : this.payors;
  }
  onRowSelect(event) {
    this.router.navigate(['/insurance/', event.selectedRowKeys[0].insuranceID]);
  }
  retrieveData(){
      this.MasterDataService.GetInsuranceByID(this.data.insuranceID)
      .subscribe(m => {
        this.data = m;
        this.payorCtrl = new FormControl({payorID: m.payorResource.payorID, payorName: m.payorResource.payorName});
      }, err => {
        if (err.status == 404)
          this.GDService.openSnackBar('Record Not Found!','Info');
      } );
  }

  onSave() {
    this.data.payorID = this.payorCtrl.value.payorID;
  
    if (this.data.insuranceID){
      this.MasterDataService.UpdateInsuranceByID(this.data)
        .subscribe(x => {
            this.GDService.openSnackBar('"' + x.insuranceName + '" Updated Sucessfully!','Info');
      });
    }
    else
      this.MasterDataService.CreateInsurance(this.data)
        .subscribe(x => {
            this.GDService.openSnackBar('"' + x.insuranceName + '" Created Sucessfully!','Info');
      });
  }
  
  ngOnInit() {
    this.MasterDataService.GetPayor().subscribe(payor => {
    this.payors = payor;
    //here only start filter
    this.filteredPayors = this.payorCtrl.valueChanges
        .startWith(this.payorCtrl.value)
        .map(val => this.displayPayorFn(val))
        .map(name => this.filterPayors(name));
    });
    this.MasterDataService.GetInsurance()
    .subscribe(x => {
      this.dataList =x;
     });
  }

}
