import { MasterDataService } from 'app/services/masterdata.service';
import { Component, OnInit, Inject, ViewChild, Input } from '@angular/core';
import { FormControl, Validators, FormGroup, FormArray, FormBuilder  } from '@angular/forms';
import { AnimationTransitionEvent, ViewEncapsulation, ElementRef } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { Router } from '@angular/router';
import { DxDataGridComponent } from "devextreme-angular";

@Component({
  selector: 'app-laboratory',
  templateUrl: './laboratory.component.html',
  styleUrls: ['./laboratory.component.css']
})
export class LaboratoryComponent implements OnInit {
  @Input() patientID: number;
  @Input() visitID: number

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
    let dialogRef = this.dialog.open(DialogResultLaboratorySearch, {
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
 

  priorities = [ 'Urgent', 'Stat', 'Routine' ];

  laboratories = [
      {value: '1', viewValue: 'Quantum Laboratory (Shah Alam) Sdn. Bhd.'},
      {value: '2', viewValue: 'Wellness lab Cheras Taman Midah Sdn. Bhd'},
      {value: '3', viewValue: 'BP Lab Sdn. Bhd.'}
    ];


    laboratoryRecord = [
    {
      id: 'LAB-0003',
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
      id: 'LAB-0004',
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
      id: 'LAB-0005',
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
  selector: 'dialog-laboratory-search',
  templateUrl: './dialog-laboratory-search.html',
})
export class DialogResultLaboratorySearch {
  dataSource: any;

  constructor(public dialogRef: MdDialogRef<DialogResultLaboratorySearch>, private MasterDataService: MasterDataService, @Inject(MD_DIALOG_DATA) public data: any) {

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
