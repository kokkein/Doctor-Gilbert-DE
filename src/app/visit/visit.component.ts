import { GDService } from './../services/GDService.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MasterDataService } from './../services/masterdata.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/startWith';
import { Observable } from 'rxjs/Observable';
import { FormControl } from '@angular/forms';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.css']
})
export class VisitComponent implements OnInit {

  visitTypes = [ 'OutPatient', 'InPatient' ];
  
  policies;
  policyCtrl: FormControl;
  filteredPolicies: any;
  doctors;
  doctorCtrl: FormControl;
  filteredDoctors: any;
  departments;
  purposeOfVisits;
  purposeOfVisitCtrl: FormControl;
  filteredPurposeOfVisits: any;
  mohs;
  mohCtrl: FormControl;
  filteredMOHs: any;
  payors;
  payorCtrl: FormControl;
  filteredPayors: any;
  patients;
  patientCtrl: FormControl;
  filteredPatients: any;
  visitdata: any = {};

  constructor(private GDService: GDService, private MasterDataService: MasterDataService, private route: ActivatedRoute, private router: Router) {

    //assign value for edit mode
    this.patientCtrl = new FormControl({patientID: 0, name: ''});
    this.payorCtrl = new FormControl({payorID: 0, payorName: ''});
    this.mohCtrl = new FormControl({mohVisitTypeID: 0, mohVisitTypeName: ''});
    this.purposeOfVisitCtrl = new FormControl({visitPurposeID: 0, visitPurposeName: ''});
    this.doctorCtrl = new FormControl({dgUserID: 0, userFullName: ''});
    this.policyCtrl = new FormControl({insuranceID: 0, insuranceName: ''});

    route.params.subscribe(p=>{
      if (p['id']!=null)
        this.visitdata.visitID = +p['id'];
        if (this.visitdata.visitID)
        {
          this.retrieveData();
        }
    });

  }
  displayPolicyFn(value: any): string {
    return value && typeof value === 'object' ? value.insuranceName : value;
  }
  displayDoctorFn(value: any): string {
    return value && typeof value === 'object' ? value.userFullName : value;
  } 
  displayPurposeOfVisitFn(value: any): string {
    return value && typeof value === 'object' ? value.visitPurposeName : value;
  }
  displayMOHFn(value: any): string {
    return value && typeof value === 'object' ? value.mohVisitTypeName : value;
  }
  displayPayorFn(value: any): string {
    return value && typeof value === 'object' ? value.payorName : value;
  }
  displayPatientFn(value: any): string {
    return value && typeof value === 'object' ? value.name : value;
  }
  filterPolicies(val: string) {
    return val ? this.policies.filter((s) => new RegExp(val, 'gi').test(s.insuranceName))
               : this.policies;
  }
  filterDoctors(val: string) {
    return val ? this.doctors.filter((s) => new RegExp(val, 'gi').test(s.userFullName))
               : this.doctors;
  } 
  filterPurposeOfVisits(val: string) {
    return val ? this.purposeOfVisits.filter((s) => new RegExp(val, 'gi').test(s.visitPurposeName))
               : this.purposeOfVisits;
  }
  filterMOHs(val: string) {
    return val ? this.mohs.filter((s) => new RegExp(val, 'gi').test(s.mohVisitTypeName))
               : this.mohs;
  }
  filterPayors(val: string) {
    return val ? this.payors.filter((s) => new RegExp(val, 'gi').test(s.payorName))
               : this.payors;
  }
  filterPatients(val: string) {
    return val ? this.patients.filter((s) => new RegExp(val, 'gi').test(s.name))
               : this.patients;
  }

  ngOnInit() {
    
    this.MasterDataService.GetInsurance().subscribe(policy => {
    this.policies = policy;
    this.filteredPolicies = this.policyCtrl.valueChanges
        .startWith(this.policyCtrl.value)
        .map(val => this.displayPolicyFn(val))
        .map(name => this.filterPolicies(name));
    });

    this.MasterDataService.GetDGUser().subscribe(doctor => {
    this.doctors = doctor;
    this.filteredDoctors = this.doctorCtrl.valueChanges
        .startWith(this.doctorCtrl.value)
        .map(val => this.displayDoctorFn(val))
        .map(name => this.filterDoctors(name));
    });

    this.MasterDataService.GetDepartment().subscribe(department => {
      this.departments = department; 
    });

    this.MasterDataService.GetPurposeOfVisit().subscribe(purposeOfVisit => {
    this.purposeOfVisits = purposeOfVisit;
    this.filteredPurposeOfVisits = this.purposeOfVisitCtrl.valueChanges
        .startWith(this.purposeOfVisitCtrl.value)
        .map(val => this.displayPurposeOfVisitFn(val))
        .map(name => this.filterPurposeOfVisits(name));
    });

    this.MasterDataService.GetMOHVisitType().subscribe(moh => {
    this.mohs = moh;
    this.filteredMOHs = this.mohCtrl.valueChanges
        .startWith(this.mohCtrl.value)
        .map(val => this.displayMOHFn(val))
        .map(name => this.filterMOHs(name));
    });

    this.MasterDataService.GetPayor().subscribe(payor => {
    this.payors = payor;
    this.filteredPayors = this.payorCtrl.valueChanges
        .startWith(this.payorCtrl.value)
        .map(val => this.displayPayorFn(val))
        .map(name => this.filterPayors(name));
    });

    this.MasterDataService.GetPatient().subscribe(patient => {
    this.patients = patient;
    this.filteredPatients = this.patientCtrl.valueChanges
        .startWith(this.patientCtrl.value)
        .map(val => this.displayPatientFn(val))
        .map(name => this.filterPatients(name));
    });
  }

  onSave(goToEpisode: boolean = false) {

      this.visitdata.patientID = this.patientCtrl.value.patientID;
      this.visitdata.PayorID = this.payorCtrl.value.payorID;
      this.visitdata.MOHVisitTypeID = this.mohCtrl.value.mohVisitTypeID;
      this.visitdata.VisitPurposeID = this.purposeOfVisitCtrl.value.visitPurposeID;
      this.visitdata.VisitDoctorID = this.doctorCtrl.value.dgUserID;
      this.visitdata.InsuranceID = this.policyCtrl.value.insuranceID;

      if (this.visitdata.visitID){
        this.MasterDataService.UpdateVisitByID(this.visitdata)
          .subscribe(x => {
            this.GDService.openSnackBar('"' + x.visitNo + '" Updated Sucessfully!','Info');
        });
        if (goToEpisode) {
          this.router.navigate(['/episode/', this.visitdata.visitID]);
        }
      }
      else
        this.MasterDataService.CreateVisit(this.visitdata)
          .subscribe(x => {
            this.GDService.openSnackBar('"' + x.visitNo + '" Created Sucessfully!','Info');
            if (goToEpisode) {
              this.router.navigate(['/episode/', x.visitID]);
            }
        });
    }

  retrieveData(){
      this.MasterDataService.GetVisitByID(this.visitdata.visitID)
      .subscribe(m => {
        this.visitdata = m;

        this.patientCtrl = new FormControl({patientID: m.patientResource.patientID, name: m.patientResource.name});
        this.payorCtrl = new FormControl({payorID: m.payorResource.payorID, payorName: m.payorResource.payorName});
        this.mohCtrl = new FormControl({mohVisitTypeID: m.mohVisitTypeResource.mohVisitTypeID, mohVisitTypeName: m.mohVisitTypeResource.mohVisitTypeName});
        this.purposeOfVisitCtrl = new FormControl({visitPurposeID: m.visitPurposeResource.visitPurposeID, visitPurposeName: m.visitPurposeResource.visitPurposeName});
        this.doctorCtrl = new FormControl({dgUserID: m.visitDoctorResource.dgUserID, userFullName: m.visitDoctorResource.userFullName});
        this.policyCtrl = new FormControl({insuranceID: m.insuranceResource.insuranceID, insuranceName: m.insuranceResource.insuranceName});

      }, err => {
        if (err.status == 404)
          this.GDService.openSnackBar('Record Not Found!','Info');
      } );
  }


}
