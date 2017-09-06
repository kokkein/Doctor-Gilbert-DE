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

   constructor(public snackBar: MdSnackBar, private MasterDataService: MasterDataService, private route: ActivatedRoute, private router: Router) {

    //assign value for edit mode
    this.patientCtrl = new FormControl({patientID: 0, name: ''});
    this.payorCtrl = new FormControl({payorID: 0, payorName: ''});
    this.mohCtrl = new FormControl({mohVisitTypeID: 0, mohVisitTypeName: ''});
    this.purposeOfVisitCtrl = new FormControl({visitPurposeID: 0, visitPurposeName: ''});
    this.doctorCtrl = new FormControl({dgUserID: 0, userFullName: ''});
    this.policyCtrl = new FormControl({insuranceID: 0, insuranceName: ''});

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
    //`^${val}`
    return val ? this.policies.filter((s) => new RegExp(val, 'gi').test(s.insuranceName))
               : this.policies;
  }
  filterDoctors(val: string) {
    //`^${val}`
    return val ? this.doctors.filter((s) => new RegExp(val, 'gi').test(s.userFullName))
               : this.doctors;
  } 
  filterPurposeOfVisits(val: string) {
    //`^${val}`
    return val ? this.purposeOfVisits.filter((s) => new RegExp(val, 'gi').test(s.visitPurposeName))
               : this.purposeOfVisits;
  }
  filterMOHs(val: string) {
    //`^${val}`
    return val ? this.mohs.filter((s) => new RegExp(val, 'gi').test(s.mohVisitTypeName))
               : this.mohs;
  }
  filterPayors(val: string) {
    //`^${val}`
    return val ? this.payors.filter((s) => new RegExp(val, 'gi').test(s.payorName))
               : this.payors;
  }
  filterPatients(val: string) {
    //`^${val}`
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
            this.openSnackBar('"' + x.visitID + '" Updated Sucessfully!','Close');
        });
        if (goToEpisode) {
          this.router.navigate(['/episode/', this.visitdata.visitID]);
        }
      }
      else
        this.MasterDataService.CreateVisit(this.visitdata)
          .subscribe(x => {
            this.openSnackBar('"' + x.visitID + '" Created Sucessfully!','Close');
            if (goToEpisode) {
              this.router.navigate(['/episode/', x.visitID]);
            }
        });
    }

    openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
        duration: 2000,
      });
    }

}
