import { GDService } from './../../services/GDService.service';
import { MasterDataService } from 'app/services/masterdata.service';
import { Component, OnInit, Inject, ViewChild, Input } from '@angular/core';
import { FormControl, Validators, FormGroup, FormArray, FormBuilder  } from '@angular/forms';
import { AnimationTransitionEvent, ViewEncapsulation, ElementRef } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { Router } from '@angular/router';
import { DxDataGridComponent } from "devextreme-angular";
import { MdSnackBar } from '@angular/material';
import { DxChartModule } from 'devextreme-angular';

@Component({
  selector: 'app-vital',
  templateUrl: './vital.component.html',
  styleUrls: ['./vital.component.css']
})
export class VitalComponent implements OnInit {
  @Input() patientID: number;
  @Input() visitID: number;
  @Input() invoiceHdrID: number;
  weatherData:any;
  constructor(private GDService: GDService, private MasterDataService: MasterDataService, private _element: ElementRef, public dialog: MdDialog, private router: Router) { 
    this.weatherData =  [{
      month: "January",
      avgT: 9.8,
      minT: 4.1,
      maxT: 15.5,
      prec: 109
  }, {
      month: "February",
      avgT: 11.8,
      minT: 5.8,
      maxT: 17.8,
      prec: 104
  }, {
      month: "March",
      avgT: 13.4,
      minT: 7.2,
      maxT: 19.6,
      prec: 92
  }, {
      month: "April",
      avgT: 15.4,
      minT: 8.1,
      maxT: 22.8,
      prec: 30
  }, {
      month: "May",
      avgT: 18,
      minT: 10.3,
      maxT: 25.7,
      prec: 10
  }, {
      month: "June",
      avgT: 20.6,
      minT: 12.2,
      maxT: 29,
      prec: 2
  }, {
      month: "July",
      avgT: 22.2,
      minT: 13.2,
      maxT: 31.3,
      prec: 2
  }, {
      month: "August",
      avgT: 22.2,
      minT: 13.2,
      maxT: 31.1,
      prec: 1
  }, {
      month: "September",
      avgT: 21.2,
      minT: 12.4,
      maxT: 29.9,
      prec: 8
  }, {
      month: "October",
      avgT: 17.9,
      minT: 9.7,
      maxT: 26.1,
      prec: 24
  }, {
      month: "November",
      avgT: 12.9,
      minT: 6.2,
      maxT: 19.6,
      prec: 64
  }, {
      month: "December",
      avgT: 9.6,
      minT: 3.4,
      maxT: 15.7,
      prec: 76
  }];
  }





  ngOnInit() {
  }

}
