import { GDService } from './../../services/GDService.service';
import { MasterDataService } from 'app/services/masterdata.service';
import { Component, OnInit, Inject, ViewChild, Input } from '@angular/core';
import { FormControl, Validators, FormGroup, FormArray, FormBuilder  } from '@angular/forms';
import { AnimationTransitionEvent, ViewEncapsulation, ElementRef } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { Router } from '@angular/router';
import { DxDataGridComponent } from "devextreme-angular";
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-vital',
  templateUrl: './vital.component.html',
  styleUrls: ['./vital.component.css']
})
export class VitalComponent implements OnInit {
  @Input() patientID: number;
  @Input() visitID: number;
  @Input() invoiceHdrID: number;

  constructor(private GDService: GDService, private MasterDataService: MasterDataService, private _element: ElementRef, public dialog: MdDialog, private router: Router) { 
    
  }

  ngOnInit() {
  }

}
