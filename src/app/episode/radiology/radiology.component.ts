import { MasterDataService } from 'app/services/masterdata.service';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormControl, Validators, FormGroup, FormArray, FormBuilder  } from '@angular/forms';
import { RadiologyList } from './RadiologyList.interface';
import { AnimationTransitionEvent, ViewEncapsulation, ElementRef } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { Router } from '@angular/router';
import { DxDataGridComponent } from "devextreme-angular";

@Component({
  selector: 'app-radiology',
  templateUrl: './radiology.component.html',
  styleUrls: ['./radiology.component.css']
})
export class RadiologyComponent implements OnInit {
  orderByCtrl: FormControl;
  filteredOrderBys: any;
  public myForm: FormGroup; // our form model
  datad: any = {};

  displayDialog: boolean;
  selectedOption: string;

  constructor(private _fb: FormBuilder, private MasterDataService: MasterDataService, private _element: ElementRef, public dialog: MdDialog, private router: Router) {
      this.orderByCtrl = new FormControl();
      this.filteredOrderBys = this.orderByCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterOrderBy(name));
  }
  
  ngOnInit() {
    this.myForm = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      radiologyList: this._fb.array([
              //this.initDynamicRow(),
          ])
      });
  }

  initDynamicRow(analysis: string) {
    return this._fb.group({
        radiologyCode:[''],
        analysis: [analysis],
        price: [''],
        discPerc: [''],
        discAmt: [''],
        totalPrice: [''],
    });
}

addDynamicRow() {
// add DynamicRow to the list
const control = <FormArray>this.myForm.controls['radiologyList'];
control.push(this.initDynamicRow('123'));
}

removeDynamicRow(i: number) {
// remove DynamicRow from the list
const control = <FormArray>this.myForm.controls['radiologyList'];
control.removeAt(i);
}

  toggleSearch() {
    //let dialogRef = this.dialog.open(DialogResultRadiologySearch);
    let dialogRef = this.dialog.open(DialogResultRadiologySearch, {
      height: '600px',
      width: '900px',
      data: {
        refdata: this.datad
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.datad = result;
      this.addDynamicRow();
      console.log(result);
    });

  }

priorities = [
  'Urgent',
  'Stat',
  'Routine'
];

modalities = [
  {value: '1', viewValue: 'COMPUTED TOMOGRAPHY (CT)'},
  {value: '2', viewValue: 'MAGNETIC RESONANCE IMAGING (MRI)'},
  {value: '3', viewValue: 'ULTRASOUND'},
  {value: '4', viewValue: 'X-RAY'},
  {value: '5', viewValue: 'BIOMARKERS'},
  {value: '6', viewValue: 'POSITRON EMISSION TOMOGRAPHY (PET)'}
];

lateralities = [
  {value: '1', viewValue: 'LEFT'},
  {value: '2', viewValue: 'RIGHT'},
  {value: '3', viewValue: 'BILATERAL'}
];

chronicConditions = [
  {value: '1', viewValue: 'Diabeties Mellitius'},
  {value: '2', viewValue: 'Hypertension'},
  {value: '2', viewValue: 'Bronchial Asthma'},
  {value: '2', viewValue: 'Obesity'},
  {value: '2', viewValue: 'Epilepsy'},
  {value: '3', viewValue: 'Others'}
];

orderBys = [
  'USER0001 - Doctor Gilbert',
  'USER0002 - Doctor Huey Yuh',
  'USER0003 - Doctor Dato Seri. Tan Seri. Abdullah Bin Dadawi',
  ];

filterOrderBy(val: string) {
  return val ? this.orderBys.filter((s) => new RegExp(val, 'gi').test(s)) : this.orderBys;
}

  laboratoryRecord = [
  {
    id: 'RAD-0003',
    laboratory: 'Wellness lab Cheras Taman Midah Sdn. Bhd',
    refferedBy: 'Doctor Lai from LAI Clinic',
    replyTo: '',
    reportedBy: 'Doctor Joo',
    priority: 'Routine',
    sampleDateTime: new Date('1/1/16'),
    note: 'This is a dangerous drug, take more to get more dangerous. take less also dangerous.',
    orderBy: 'Doctor Gilbert Chin',
    created: new Date('1/1/16'),
    createdBy: 'Doctor Gilbert',
    version: 2,
    updated: new Date('1/1/16'),
    updatedBy: 'Doctor Chin',
  },
  {
    id: 'RAD-0004',
    laboratory: 'Quantum Laboratory (Shah Alam) Sdn. Bhd.',
    refferedBy: 'Doctor Lai from LAI Clinic',
    replyTo: '',
    reportedBy: 'Doctor Khoo',
    priority: 'Routine',
    sampleDateTime: new Date('1/1/16'),
    note: 'This Patient is pregnant!',
    orderBy: 'Doctor Gilbert Chin',
    created: new Date('1/1/16'),
    createdBy: 'Doctor Gilbert',
    version: 2,
    updated: new Date('1/1/16'),
    updatedBy: 'Doctor Chin',
  },
  {
    id: 'RAD-0005',
    laboratory: 'Wellness lab Cheras Taman Midah Sdn. Bhd',
    refferedBy: 'Doctor Lai from LAI Clinic',
    replyTo: 'Ward A',
    reportedBy: 'Doctor Khoo',
    priority: 'Stat',
    sampleDateTime: new Date('1/1/16'),
    note: 'This is a dangerous drug, take more to get more dangerous. take less also dangerous.',
    orderBy: 'Doctor Gilbert Chin',
    created: new Date('1/1/16'),
    createdBy: 'Doctor Gilbert',
    version: 2,
    updated: new Date('1/1/16'),
    updatedBy: 'Doctor Chin',
  },
];


}

@Component({
  selector: 'dialog-radiology-search',
  templateUrl: './dialog-radiology-search.html',
})
export class DialogResultRadiologySearch {
  dataSource: any;

  constructor(public dialogRef: MdDialogRef<DialogResultRadiologySearch>, private MasterDataService: MasterDataService, @Inject(MD_DIALOG_DATA) public data: any) {

    this.MasterDataService.GetLabItem()
    .subscribe(x => {
      this.dataSource  = x;
    });
  }

  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent
    
  getSelectedItem() {
    this.data.datad = this.dataGrid.instance.getSelectedRowKeys();
  }

}
