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
  public myForm: FormGroup; // our form model
  returnedResult: any = {};

  displayDialog: boolean;
  selectedOption: string;
  toShow: boolean = true;

  doctors;
  //doctorCtrl: FormControl;
  orderedByCtrl: FormControl;
  referredByCtrl: FormControl;
  replyToCtrl: FormControl;
  reportedByCtrl: FormControl;
  filteredOrderedBy: any;
  filteredReferredBy: any;
  filteredReplyTo: any;
  filteredReportedBy: any;

  displayDoctorFn(value: any): string {
    return value && typeof value === 'object' ? value.userFullName : value;
  }
  filterDoctors(val: string) {
    //`^${val}`
    return val ? this.doctors.filter((s) => new RegExp(val, 'gi').test(s.userFullName))
               : this.doctors;
  }
  constructor(private MasterDataService: MasterDataService, private _element: ElementRef, public dialog: MdDialog, private router: Router) {
    this.orderedByCtrl = new FormControl({dgUserID: 0, userFullName: ''});
    this.referredByCtrl = new FormControl({dgUserID: 0, userFullName: ''});
    this.replyToCtrl = new FormControl({dgUserID: 0, userFullName: ''});
    this.reportedByCtrl = new FormControl({dgUserID: 0, userFullName: ''});
  }
  
  ngOnInit() {

      this.MasterDataService.GetDGUser().subscribe(doctor => {
        this.doctors = doctor;
        //here only start filter
        this.filteredOrderedBy = this.orderedByCtrl.valueChanges
            .startWith(this.orderedByCtrl.value)
            .map(val => this.displayDoctorFn(val))
            .map(name => this.filterDoctors(name));
        this.filteredReferredBy = this.referredByCtrl.valueChanges
            .startWith(this.referredByCtrl.value)
            .map(val => this.displayDoctorFn(val))
            .map(name => this.filterDoctors(name));
        this.filteredReplyTo = this.replyToCtrl.valueChanges
            .startWith(this.replyToCtrl.value)
            .map(val => this.displayDoctorFn(val))
            .map(name => this.filterDoctors(name));
        this.filteredReportedBy = this.reportedByCtrl.valueChanges
            .startWith(this.reportedByCtrl.value)
            .map(val => this.displayDoctorFn(val))
            .map(name => this.filterDoctors(name));
        });

  }


  toggleSearch() {
    let dialogRef = this.dialog.open(DialogResultRadiologySearch, {
      height: '650px',
      width: '900px',
      data: {
        refdata: this.returnedResult
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.returnedResult = result;
    });

  }

  modalities = [
    {value: '1', viewValue: 'COMPUTED TOMOGRAPHY (CT)'},
    {value: '2', viewValue: 'MAGNETIC RESONANCE IMAGING (MRI)'},
    {value: '3', viewValue: 'ULTRASOUND'},
    {value: '4', viewValue: 'X-RAY'},
    {value: '5', viewValue: 'BIOMARKERS'},
    {value: '6', viewValue: 'POSITRON EMISSION TOMOGRAPHY (PET)'}
  ];
  
  priorities = ['Urgent','Stat','Routine'];
  lateralities = [{value: '1', viewValue: 'LEFT'},{value: '2', viewValue: 'RIGHT'},{value: '3', viewValue: 'BILATERAL'}];
  
  chronicConditions = [
    {value: '1', viewValue: 'Diabeties Mellitius'},
    {value: '2', viewValue: 'Hypertension'},
    {value: '2', viewValue: 'Bronchial Asthma'},
    {value: '2', viewValue: 'Obesity'},
    {value: '2', viewValue: 'Epilepsy'},
    {value: '3', viewValue: 'Others'}
  ];

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
    this.data.returnedResult = this.dataGrid.instance.getSelectedRowKeys();
  }

}
