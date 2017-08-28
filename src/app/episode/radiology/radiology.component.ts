import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Service, Company } from './../../services/app.service';
import { TreeTableModule, TreeNode } from 'primeng/primeng';
import { NodeService } from './../../services/NodeService';
import { AnimationTransitionEvent, ViewEncapsulation, ElementRef } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig} from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-radiology',
  templateUrl: './radiology.component.html',
  styleUrls: ['./radiology.component.css']
})
export class RadiologyComponent implements OnInit {
  orderByCtrl: FormControl;
  filteredOrderBys: any;

  displayDialog: boolean;
  dataSource: Company[];

  constructor(service: Service, private _element: ElementRef, public dialog: MdDialog, private router: Router) {
      this.orderByCtrl = new FormControl();
      this.filteredOrderBys = this.orderByCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterOrderBy(name));

      this.dataSource = service.getCompanies();
  }
  
  ngOnInit() {

  }

  toggleSearch() {
    //let dialogRef = this.dialog.open(DialogResultRadiologySearch);
    let dialogRef = this.dialog.open(DialogResultRadiologySearch, {
      height: '600px',
      width: '800px',
    });
    //dialogRef.afterClosed().subscribe(result => {
      //this.selectedOption = result;
    //});




  }

priorities = [
  'Urgent',
  'Stat',
  'Routine'
];

laboratories = [
  {value: '1', viewValue: 'Quantum Laboratory (Shah Alam) Sdn. Bhd.'},
  {value: '2', viewValue: 'Wellness lab Cheras Taman Midah Sdn. Bhd'},
  {value: '3', viewValue: 'BP Lab Sdn. Bhd.'}
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
  selector: 'dialog-radiology-search',
  templateUrl: './dialog-radiology-search.html',
})
export class DialogResultRadiologySearch {
  dataSource: Company[];

  constructor(public dialogRef: MdDialogRef<DialogResultRadiologySearch>, service: Service) {
    this.dataSource = service.getCompanies();
  }

}