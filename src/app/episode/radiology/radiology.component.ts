import { GDService } from './../../services/GDService.service';
import { MasterDataService } from 'app/services/masterdata.service';
import { Component, OnInit, Inject, ViewChild, Input } from '@angular/core';
import { FormControl, Validators, FormGroup, FormArray, FormBuilder  } from '@angular/forms';
import { RadiologyList } from './RadiologyList.interface';
import { AnimationTransitionEvent, ViewEncapsulation, ElementRef } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { Router } from '@angular/router';
import { DxDataGridComponent } from "devextreme-angular";
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-radiology',
  templateUrl: './radiology.component.html',
  styleUrls: ['./radiology.component.css']
})
export class RadiologyComponent implements OnInit {
  @Input() patientID: number;
  @Input() visitID: number
  @Input() invoiceHdrID: number;

  returnedResult: any = {};
  data: any = {RadiologyLnResource:{}};

  displayDialog: boolean;
  selectedOption: string;
  toShow: boolean = true;

  historyRecord;
  modalities;
  doctors;
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
  constructor(private GDService: GDService, private MasterDataService: MasterDataService, private _element: ElementRef, public dialog: MdDialog, private router: Router) {
    this.orderedByCtrl = new FormControl({dgUserID: 0, userFullName: ''});
    this.referredByCtrl = new FormControl({dgUserID: 0, userFullName: ''});
    this.replyToCtrl = new FormControl({dgUserID: 0, userFullName: ''});
    this.reportedByCtrl = new FormControl({dgUserID: 0, userFullName: ''});
  }
  
    onSave() {
      this.data.RadiologyLnResource = this.returnedResult;
      
      this.data.orderedByID = this.orderedByCtrl.value.dgUserID;
      this.data.referredByID = this.referredByCtrl.value.dgUserID;
      this.data.replyToID = this.replyToCtrl.value.dgUserID;
      this.data.reportedByID = this.reportedByCtrl.value.dgUserID;
      this.data.patientID = this.patientID;
      this.data.visitID = this.visitID;
      this.data.invoiceHdrID = this.invoiceHdrID;
      this.data.CreatedByID = 1;

      if (this.data.radiologyHdrID){
        this.MasterDataService.UpdateRadiologyRecordByID(this.data)
          .subscribe(x => {
              this.GDService.openSnackBar(x.RadiologyOrderNo + '" Updated Sucessfully!','Close');
        });
      }
      else
        this.MasterDataService.CreateRadiologyRecord(this.data)
          .subscribe(x => {
            this.GDService.openSnackBar(x.RadiologyOrderNo + '" Created Sucessfully!','Close');
        });
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
      this.MasterDataService.GetModality().subscribe(modality => {
        this.modalities = modality;
        });
      this.MasterDataService.GetRadiologyByVisit(this.visitID).subscribe(hr => {
        this.historyRecord = hr;
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
  
  priorities = ['Urgent','Stat','Routine'];
  lateralities = [{value: 'LEFT', viewValue: 'LEFT'},{value: 'RIGHT', viewValue: 'RIGHT'},{value: 'BILATERAL', viewValue: 'BILATERAL'}];

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
