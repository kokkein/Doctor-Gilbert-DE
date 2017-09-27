import { VisitComponent } from './visit/visit.component';
import { GDService } from './services/GDService.service';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { AuthService } from './services/auth.service';
import { SpecialityComponent } from './masterData/speciality/speciality.component';
import { SpeechRecognitionService } from './services/SpeechRecognitionService';
import { MasterDataService } from './services/masterdata.service';
import { EventService } from './services/EventService';
import { NodeService } from './services/NodeService';
import { Service, Company } from './services/app.service';
import { CarService } from './services/carService';
import { MdDatepickerModule } from '@angular/material'
import { MdTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule, RequestOptions } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent, DialogResultExampleDialog } from './app.component';
import { MaterialModule, MdNativeDateModule, MdChipsModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DxCheckBoxModule, DxChartModule, DxTreeMapModule } from 'devextreme-angular';
import { DxDataGridModule } from 'devextreme-angular';

import 'hammerjs';

//Project Component
import { PatientComponent } from './patient/patient.component'; 
import { VitalComponent } from './episode/vital/vital.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryItemComponent } from './inventory-item/inventory-item.component';
import { UserComponent } from './user/user.component';
import { EpisodeComponent } from './episode/episode.component';
import { DocumentComponent } from './episode/document/document.component';
import { RadiologyComponent, DialogResultRadiologySearch } from './episode/radiology/radiology.component';
import { LaboratoryComponent, DialogResultLaboratorySearch } from './episode/laboratory/laboratory.component';
import { MedicationComponent, DialogResultMedicationSearch } from './episode/medication/medication.component';
import { TimelineComponent } from './episode/timeline/timeline.component';
import { DiagnosisComponent } from './episode/diagnosis/diagnosis.component';
import { VitalSignsComponent } from './episode/vital-signs/vital-signs.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { DxSelectBoxModule, DxTextBoxModule, DxTemplateModule } from 'devextreme-angular';
import { DxBoxModule, DxTextAreaModule } from 'devextreme-angular';

//Third Party Component
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { InputMaskModule } from 'primeng/primeng'; 
import { ChipsModule } from 'primeng/primeng'; 
import { EditorModule, SharedModule } from 'primeng/primeng';
import { TreeTableModule, TreeNode } from 'primeng/primeng';
import { DataTableModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { ScheduleModule, CalendarModule, CheckboxModule } from 'primeng/primeng';
import { DepartmentComponent } from './masterData/department/department.component';
import { InsuranceComponent } from './masterData/insurance/insurance.component';
import { PayorComponent } from './masterData/payor/payor.component';
import { MOHVisitTypeComponent } from './masterData/mohvisit-type/mohvisit-type.component';
import { PurposeOfVisitComponent } from './masterData/purpose-of-visit/purpose-of-visit.component';
import { MasterDataComponent } from './masterData/master-data.component';
import { GrowlModule } from 'primeng/primeng';
import { MenuModule, TieredMenuModule } from 'primeng/primeng';
import { InventoryBrandComponent } from './masterData/inventory-brand/inventory-brand.component';
import { InventoryGenericComponent } from './masterData/inventory-generic/inventory-generic.component';
import { InventoryAtcComponent } from './masterData/inventory-atc/inventory-atc.component';
import { InventoryCategoryComponent } from './masterData/inventory-category/inventory-category.component';
import { InventorySubcategoryComponent } from './masterData/inventory-subcategory/inventory-subcategory.component';
import { InventoryMedicationclassComponent } from './masterData/inventory-medicationclass/inventory-medicationclass.component';
import { InventoryPregnancycategoryComponent } from './masterData/inventory-pregnancycategory/inventory-pregnancycategory.component';
import { DiagnosisMasterComponent } from './masterData/diagnosis-master/diagnosis-master.component';
import { LandingComponent } from './landing/landing.component';
import { ProcedureComponent, DialogResultProcedureSearch } from './episode/procedure/procedure.component';
import { PriceStructureComponent } from './masterData/price-structure/price-structure.component';
import { InventoryPriceStructureComponent } from './masterData/inventory-price-structure/inventory-price-structure.component';
import { Auth0UserProfileComponent } from './auth0-user-profile/auth0-user-profile.component';
import { BillingComponent } from './billing/billing.component';
import { ChargeItemComponent } from './charge-item/charge-item.component';
import { SelfServiceComponent } from './self-service/self-service.component';
import { VisitOverviewComponent } from './visit-overview/visit-overview.component';

const appRoutes: Routes = [
{ path: '', component: LandingComponent},
{ path: 'landing', component: LandingComponent},
{ path: 'profile', component: Auth0UserProfileComponent},
{ path: 'appointment', component: AppointmentComponent},
{ path: 'patient', component: PatientComponent},
{ path: 'patient/:id', component: PatientComponent},
{ path: 'visit', component: VisitComponent},
{ path: 'visit-overview', component: VisitOverviewComponent},
{ path: 'visit/:id', component: VisitComponent},
{ path: 'vital', component: VitalComponent},
{ path: 'charge-item', component: ChargeItemComponent},
{ path: 'charge-item/:id', component: ChargeItemComponent},
{ path: 'user', component: UserComponent},
{ path: 'user/:id', component: UserComponent},
{ path: 'episode', component: EpisodeComponent},
{ path: 'episode/:id', component: EpisodeComponent},
{ path: 'master-data', component: MasterDataComponent},
{ path: 'payor', component: PayorComponent},
{ path: 'payor/:id', component: PayorComponent},
{ path: 'mohvisit-type', component: MOHVisitTypeComponent},
{ path: 'mohvisit-type/:id', component: MOHVisitTypeComponent},
{ path: 'insurance', component: InsuranceComponent},
{ path: 'insurance/:id', component: InsuranceComponent},
{ path: 'purpose-of-visit', component: PurposeOfVisitComponent},
{ path: 'purpose-of-visit/:id', component: PurposeOfVisitComponent},
{ path: 'department', component: DepartmentComponent},
{ path: 'department/:id', component: DepartmentComponent},
{ path: 'inventory-atc', component: InventoryAtcComponent},
{ path: 'inventory-atc/:id', component: InventoryAtcComponent},
{ path: 'inventory-brand', component: InventoryBrandComponent},
{ path: 'inventory-brand/:id', component: InventoryBrandComponent},
{ path: 'inventory-category', component: InventoryCategoryComponent},
{ path: 'inventory-category/:id', component: InventoryCategoryComponent},
{ path: 'inventory-generic', component: InventoryGenericComponent},
{ path: 'inventory-generic/:id', component: InventoryGenericComponent},
{ path: 'inventory-medicationclass', component: InventoryMedicationclassComponent},
{ path: 'inventory-medicationclass/:id', component: InventoryMedicationclassComponent},
{ path: 'inventory-pregnancycategory', component: InventoryPregnancycategoryComponent},
{ path: 'inventory-pregnancycategory/:id', component: InventoryPregnancycategoryComponent},
{ path: 'inventory-subcategory', component: InventorySubcategoryComponent},
{ path: 'inventory-subcategory/:id', component: InventorySubcategoryComponent},
{ path: 'speciality', component: SpecialityComponent},
{ path: 'speciality/:id', component: SpecialityComponent},
{ path: 'Appointment', component: AppointmentComponent},
{ path: 'Appointment/:id', component: AppointmentComponent},
{ path: 'Diagnosis-master', component: DiagnosisMasterComponent},
{ path: 'Diagnosis-master/:id', component: DiagnosisMasterComponent},
{ path: 'price-structure', component: PriceStructureComponent},
{ path: 'billing', component: BillingComponent},
{ path: 'price-structure/:id', component: PriceStructureComponent},
{ path: 'inventory-price-structure', component: InventoryPriceStructureComponent},
{ path: 'inventory-price-structure/:id', component: InventoryPriceStructureComponent},
];

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenGetter: (() => localStorage.getItem('access_token'))
  }), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    VisitComponent,
    VitalComponent,
    InventoryComponent,InventorySubcategoryComponent,InventoryPregnancycategoryComponent,
    InventoryItemComponent,InventoryMedicationclassComponent,InventoryGenericComponent,
    UserComponent,InventoryCategoryComponent,InventoryBrandComponent,InventoryAtcComponent,
    EpisodeComponent,
    DocumentComponent,
    RadiologyComponent,
    LaboratoryComponent,
    MedicationComponent,
    TimelineComponent, 
    DiagnosisComponent, DialogResultRadiologySearch, DialogResultLaboratorySearch, DialogResultProcedureSearch, DialogResultMedicationSearch,
    VitalSignsComponent, DialogResultExampleDialog, AppointmentComponent, DepartmentComponent, InsuranceComponent, PayorComponent, MOHVisitTypeComponent, PurposeOfVisitComponent, MasterDataComponent, InventoryBrandComponent, InventoryGenericComponent, InventoryAtcComponent, InventoryCategoryComponent, InventorySubcategoryComponent, InventoryMedicationclassComponent, InventoryPregnancycategoryComponent, SpecialityComponent, DiagnosisMasterComponent, LandingComponent, ProcedureComponent, PriceStructureComponent, InventoryPriceStructureComponent, Auth0UserProfileComponent, BillingComponent, ChargeItemComponent, SelfServiceComponent, VisitOverviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule, MdChipsModule,
    HttpModule, RouterModule.forRoot(appRoutes),
    MaterialModule, MenuModule, MdNativeDateModule, MdTableModule, CdkTableModule,
    BrowserAnimationsModule, FlexLayoutModule, GrowlModule, TieredMenuModule,
    InputMaskModule, ChipsModule, EditorModule, SharedModule, CheckboxModule,
    Ng2GoogleChartsModule, TreeTableModule, DataTableModule, DialogModule, ScheduleModule, CalendarModule,
    DxCheckBoxModule, DxSelectBoxModule, DxTextBoxModule, DxTemplateModule, DxBoxModule, DxTextAreaModule, DxChartModule, DxTreeMapModule,
    DxDataGridModule, CommonModule
  ],
  providers: [NodeService, CarService, EventService, MasterDataService, SpeechRecognitionService,Service, Company, AuthService, GDService,
    AuthService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
  entryComponents: [DialogResultExampleDialog, DialogResultRadiologySearch, DialogResultProcedureSearch, DialogResultLaboratorySearch, DialogResultMedicationSearch],
  bootstrap: [AppComponent]
})
export class AppModule { }
