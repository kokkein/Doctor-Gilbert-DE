import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

@Injectable()
export class MasterDataService {
    
    sURL = "http://localhost:5000/api/"
    constructor(private http: Http, private authHttp: AuthHttp) {}

    GetCountry() {
        return this.authHttp.get(this.sURL + 'country')
                    .map(res => res.json());
    }
    GetModality() {
        return this.authHttp.get(this.sURL + 'Modality')
                    .map(res => res.json());
    }
    GetIdentificationType() {
        return this.authHttp.get(this.sURL + 'identificationtype')
                    .map(res => res.json());
    }
    GetInsurance() {
        return this.authHttp.get(this.sURL + 'insurance')
                    .map(res => res.json());
    }
    GetInsuranceByID(id) {
        return this.authHttp.get(this.sURL + 'insurance/' + id)
                    .map(res => res.json());
    }
    GetModalityByID(id) {
        return this.authHttp.get(this.sURL + 'Modality/' + id)
                    .map(res => res.json());
    }
    GetVisit() {
        return this.authHttp.get(this.sURL + 'MedicalRecord/Visit')
                    .map(res => res.json());
    }
    GetVisitByID(id) {
        return this.authHttp.get(this.sURL + 'MedicalRecord/Visit/' + id)
                    .map(res => res.json());
    }
    GetPayor() {
        return this.authHttp.get(this.sURL + 'payor')
                    .map(res => res.json());
    }
    GetPayorByID(id) {
        return this.authHttp.get(this.sURL + 'payor/' + id)
                    .map(res => res.json());
    }
    GetRelationship() {
        return this.authHttp.get(this.sURL + 'relationship')
                    .map(res => res.json());
    }
    GetTitle() {
        return this.authHttp.get(this.sURL + 'title')
                    .map(res => res.json());
    }
    GetState() {
        return this.authHttp.get(this.sURL + 'state')
                    .map(res => res.json());
    }
    GetPatient() {
        return this.authHttp.get(this.sURL + 'Patient/Patient')
                    .map(res => res.json());
    }
    GetPatientByID(id) {
        return this.authHttp.get(this.sURL + 'Patient/Patient/' + id)
                    .map(res => res.json());
    }
    GetMOHVisitType() {
        return this.authHttp.get(this.sURL + 'MOHVisitType')
                    .map(res => res.json());
    }
    GetMOHVisitTypeByID(id) {
        return this.authHttp.get(this.sURL + 'MOHVisitType/' + id)
                    .map(res => res.json());
    }
    GetPurposeOfVisit() {
        return this.authHttp.get(this.sURL + 'VisitPurpose')
                    .map(res => res.json());
    }
    GetPurposeOfVisitByID(id) {
        return this.authHttp.get(this.sURL + 'VisitPurpose/' + id)
                    .map(res => res.json());
    }
    GetDGUser() {
        return this.authHttp.get(this.sURL + 'DGUser')
                    .map(res => res.json());
    }
    GetDGUserByID(id) {
        return this.authHttp.get(this.sURL + 'DGUser/' + id)
                    .map(res => res.json());
    }
    GetDepartment() {
        return this.authHttp.get(this.sURL + 'Department')
                    .map(res => res.json());
    }
    GetDepartmentByID(id) {
        return this.authHttp.get(this.sURL + 'Department/' + id)
                    .map(res => res.json());
    }
    GetInventory() {
        return this.authHttp.get(this.sURL + 'Inventory')
                    .map(res => res.json());
    }
    GetInventoryByID(id) {
        return this.authHttp.get(this.sURL + 'Inventory/' + id)
                    .map(res => res.json());
    }
    GetInventoryBySearch(keyword) {
        return this.authHttp.get(this.sURL + 'InventorySearch/' + keyword)
                    .map(res => res.json());
    }
    GetInventoryBrand() {
        return this.authHttp.get(this.sURL + 'InventoryBrand')
                    .map(res => res.json());
    }
    GetInventoryBrandByID(id) {
        return this.authHttp.get(this.sURL + 'InventoryBrand/' + id)
                    .map(res => res.json());
    }
    GetInventoryCategory() {
        return this.authHttp.get(this.sURL + 'InventoryCategory')
                    .map(res => res.json());
    }
    GetInventoryCategoryByID(id) {
        return this.authHttp.get(this.sURL + 'InventoryCategory/' + id)
                    .map(res => res.json());
    }
    GetInventorySubCategory() {
        return this.authHttp.get(this.sURL + 'InventorySubCategory')
                    .map(res => res.json());
    }
    GetInventorySubCategoryByID(id) {
        return this.authHttp.get(this.sURL + 'InventorySubCategory/' + id)
                    .map(res => res.json());
    }
    GetInventoryGeneric() {
        return this.authHttp.get(this.sURL + 'InventoryGeneric')
                    .map(res => res.json());
    }
    GetInventoryGenericByID(id) {
        return this.authHttp.get(this.sURL + 'InventoryGeneric/' + id)
                    .map(res => res.json());
    }
    GetInventoryMedicationClass() {
        return this.authHttp.get(this.sURL + 'InventoryMedicationClass')
                    .map(res => res.json());
    }
    GetInventoryMedicationClassByID(id) {
        return this.authHttp.get(this.sURL + 'InventoryMedicationClass/' + id)
                    .map(res => res.json());
    }
    GetInventoryPregnancyCategory() {
        return this.authHttp.get(this.sURL + 'InventoryPregnancyCategory')
                    .map(res => res.json());
    }
    GetInventoryPregnancyCategoryByID(id) {
        return this.authHttp.get(this.sURL + 'InventoryPregnancyCategory/' + id)
                    .map(res => res.json());
    }
    GetInventoryATCClassification() {
        return this.authHttp.get(this.sURL + 'InventoryATCClassification')
                    .map(res => res.json());
    }
    GetInventoryATCClassificationByID(id) {
        return this.authHttp.get(this.sURL + 'InventoryATCClassification/' + id)
                    .map(res => res.json());
    }
    GetSpeciality() {
        return this.authHttp.get(this.sURL + 'Speciality')
                    .map(res => res.json());
    }
    GetSpecialityByID(id) {
        return this.authHttp.get(this.sURL + 'Speciality/' + id)
                    .map(res => res.json());
    }
    GetPriceStructure() {
        return this.authHttp.get(this.sURL + 'PriceStructure')
                    .map(res => res.json());
    }
    GetPriceStructureByID(id) {
        return this.authHttp.get(this.sURL + 'PriceStructure/' + id)
                    .map(res => res.json());
    }
    GetAppointment() {
        return this.authHttp.get(this.sURL + 'Appointment/Appointment')
                    .map(res => res.json());
    }
    GetAppointmentByID(id) {
        return this.authHttp.get(this.sURL + 'Appointment/Appointment/' + id)
                    .map(res => res.json());
    }
    GetDiagnosis() {
        return this.authHttp.get(this.sURL + 'Diagnosis')
                    .map(res => res.json());
    }
    GetDiagnosisByID(id) {
        return this.authHttp.get(this.sURL + 'Diagnosis/' + id)
                    .map(res => res.json());
    }
    GetDiagnosisBySearch(searchKey) {
        return this.authHttp.get(this.sURL + 'DiagnosisSearch/' + searchKey)
                    .map(res => res.json());
    }
    GetRadiology() {
        return this.authHttp.get(this.sURL + 'medicalRecord/Radiology')
                    .map(res => res.json());
    }
    GetRadiologyByID(id) {
        return this.authHttp.get(this.sURL + 'medicalRecord/Radiology/' + id)
                    .map(res => res.json());
    }
    GetRadiologyByVisit(visitID) {
        return this.authHttp.get(this.sURL + 'medicalRecord/RadiologyByVisit/' + visitID)
                    .map(res => res.json());
    }
    GetLabItem() {
        return this.authHttp.get(this.sURL + 'LabItem')
                    .map(res => res.json());
    }
    GetLabItemByID(id) {
        return this.authHttp.get(this.sURL + 'LabItem/' + id)
                    .map(res => res.json());
    }

//Add Data
    CreatePurposeOfVisit(PurposeOfVisit) {
        return this.authHttp.post(this.sURL + 'VisitPurpose', PurposeOfVisit)
                    .map(res => res.json());
    }
    CreateModality(Modality) {
        return this.authHttp.post(this.sURL + 'Modality', Modality)
                    .map(res => res.json());
    }
    CreateVisit(Visit) {
        return this.authHttp.post(this.sURL + 'MedicalRecord/CreateVisit', Visit)
                    .map(res => res.json());
    }
    CreateMOHVisitType(MOHVisitType) {
        return this.authHttp.post(this.sURL + 'MOHVisitType', MOHVisitType)
                    .map(res => res.json());
    }
    CreatePayor(Payor) {
        return this.authHttp.post(this.sURL + 'payor', Payor)
                    .map(res => res.json());
    }
    CreateDepartment(Department) {
        return this.authHttp.post(this.sURL + 'department', Department)
                    .map(res => res.json());
    }
    CreateInsurance(Insurance) {
        return this.authHttp.post(this.sURL + 'Insurance', Insurance)
                    .map(res => res.json());
    }
    CreateLabItem(LabItem) {
        return this.authHttp.post(this.sURL + 'LabItem', LabItem)
                    .map(res => res.json());
    }
    CreateInventory(Inventory) {
        return this.authHttp.post(this.sURL + 'Inventory', Inventory)
                    .map(res => res.json());
    }
    CreateInventoryBrand(InventoryBrand) {
        return this.authHttp.post(this.sURL + 'InventoryBrand', InventoryBrand)
                    .map(res => res.json());
    }
    CreateInventoryCategory(InventoryCategory) {
        return this.authHttp.post(this.sURL + 'InventoryCategory', InventoryCategory)
                    .map(res => res.json());
    }
    CreateInventorySubCategory(InventorySubCategory) {
        return this.authHttp.post(this.sURL + 'InventorySubCategory', InventorySubCategory)
                    .map(res => res.json());
    }
    CreateInventoryGeneric(InventoryGeneric) {
        return this.authHttp.post(this.sURL + 'InventoryGeneric', InventoryGeneric)
                    .map(res => res.json());
    }
    CreateInventoryMedicationClass(InventoryMedicationClass) {
        return this.authHttp.post(this.sURL + 'InventoryMedicationClass', InventoryMedicationClass)
                    .map(res => res.json());
    }
    CreateInventoryPregnancyCategory(InventoryPregnancyCategory) {
        return this.authHttp.post(this.sURL + 'InventoryPregnancyCategory', InventoryPregnancyCategory)
                    .map(res => res.json());
    }
    CreateInventoryATCClassification(InventoryATCClassification) {
        return this.authHttp.post(this.sURL + 'InventoryATCClassification', InventoryATCClassification)
                    .map(res => res.json());
    }
    CreateDGUser(DGUser) {
        return this.authHttp.post(this.sURL + 'DGUser', DGUser)
                    .map(res => res.json());
    }
    CreatePriceStructure(PriceStructure) {
        return this.authHttp.post(this.sURL + 'PriceStructure', PriceStructure)
                    .map(res => res.json());
    }
    CreateSpeciality(Speciality) {
        return this.authHttp.post(this.sURL + 'Speciality', Speciality)
                    .map(res => res.json());
    }
    CreateDiagnosis(Diagnosis) {
        return this.authHttp.post(this.sURL + 'Diagnosis', Diagnosis)
                    .map(res => res.json());
    }
    CreatePatient(Patient) {
        return this.authHttp.post(this.sURL + 'Patient/CreatePatient', Patient)
                    .map(res => res.json());
    }
    CreateAppointment(Appointment) {
        return this.authHttp.post(this.sURL + 'Appointment/CreateAppointment', Appointment)
                    .map(res => res.json());
    }
    CreateRadiologyRecord(RadiologyHdr) {
        return this.authHttp.post(this.sURL + 'MedicalRecord/CreateRadiology', RadiologyHdr)
                    .map(res => res.json());
    }

//Update Data
    UpdateMOHVisitTypeByID(MOHVisitType) {
        return this.authHttp.put(this.sURL + 'MOHVisitType/' + MOHVisitType.mohVisitTypeID, MOHVisitType)
                    .map(res => res.json());
    }
    UpdatePurposeOfVisitByID(PurposeOfVisit) {
        return this.authHttp.put(this.sURL + 'VisitPurpose/' + PurposeOfVisit.visitPurposeID, PurposeOfVisit)
                    .map(res => res.json());
    }
    UpdatePayorByID(Payor) {
        return this.authHttp.put(this.sURL + 'payor/' + Payor.payorID, Payor)
                    .map(res => res.json());
    }
    UpdateModalityByID(Modality) {
        return this.authHttp.put(this.sURL + 'Modality/' + Modality.modalityID, Modality)
                    .map(res => res.json());
    }
    UpdateDepartmentByID(Department) {
        return this.authHttp.put(this.sURL + 'Department/' + Department.departmentID, Department)
                    .map(res => res.json());
    }
    UpdateInsuranceByID(Insurance) {
        return this.authHttp.put(this.sURL + 'Insurance/' + Insurance.insuranceID, Insurance)
                    .map(res => res.json());
    }
    UpdateInventoryByID(Inventory) {
        return this.authHttp.put(this.sURL + 'Inventory/' + Inventory.inventoryID, Inventory)
                    .map(res => res.json());
    }
    UpdateInventoryBrandByID(InventoryBrand) {
        return this.authHttp.put(this.sURL + 'InventoryBrand/' + InventoryBrand.inventoryBrandID, InventoryBrand)
                    .map(res => res.json());
    }
    UpdateInventoryCategoryByID(InventoryCategory) {
        return this.authHttp.put(this.sURL + 'InventoryCategory/' + InventoryCategory.inventoryCategoryID, InventoryCategory)
                    .map(res => res.json());
    }
    UpdateInventorySubCategoryByID(InventorySubCategory) {
        return this.authHttp.put(this.sURL + 'InventorySubCategory/' + InventorySubCategory.inventorySubCategoryID, InventorySubCategory)
                    .map(res => res.json());
    }
    UpdateInventoryGenericByID(InventoryGeneric) {
        return this.authHttp.put(this.sURL + 'InventoryGeneric/' + InventoryGeneric.inventoryGenericID, InventoryGeneric)
                    .map(res => res.json());
    }
    UpdateInventoryMedicationClassByID(InventoryMedicationClass) {
        return this.authHttp.put(this.sURL + 'InventoryMedicationClass/' + InventoryMedicationClass.inventoryMedicationClassID, InventoryMedicationClass)
                    .map(res => res.json());
    }
    UpdateInventoryPregnancyCategoryByID(InventoryPregnancyCategory) {
        return this.authHttp.put(this.sURL + 'InventoryPregnancyCategory/' + InventoryPregnancyCategory.inventoryPregnancyCategoryID, InventoryPregnancyCategory)
                    .map(res => res.json());
    }
    UpdateInventoryATCClassificationByID(InventoryATCClassification) {
        return this.authHttp.put(this.sURL + 'InventoryATCClassification/' + InventoryATCClassification.inventoryATCClassificationID, InventoryATCClassification)
                    .map(res => res.json());
    }
    UpdateDGUserByID(DGUser) {
        return this.authHttp.put(this.sURL + 'DGUser/' + DGUser.dgUserID, DGUser)
                    .map(res => res.json());
    }
    UpdateVisitByID(Visit) {
        return this.authHttp.put(this.sURL + 'MedicalRecord/Visit/' + Visit.visitID, Visit)
                    .map(res => res.json());
    }
    UpdatePriceStructureByID(PriceStructure) {
        return this.authHttp.put(this.sURL + 'PriceStructure/' + PriceStructure.priceStructureID, PriceStructure)
                    .map(res => res.json());
    }
    UpdateSpecialityByID(Speciality) {
        return this.authHttp.put(this.sURL + 'Speciality/' + Speciality.specialityID, Speciality)
                    .map(res => res.json());
    }
    UpdateDiagnosisByID(Diagnosis) {
        return this.authHttp.put(this.sURL + 'Diagnosis/' + Diagnosis.diagnosisID, Diagnosis)
                    .map(res => res.json());
    }
    UpdateLabItemByID(LabItem) {
        return this.authHttp.put(this.sURL + 'LabItem/' + LabItem.labItemID, LabItem)
                    .map(res => res.json());
    }
    UpdatePatientByID(Patient) {
        return this.authHttp.put(this.sURL + 'Patient/Patient/' + Patient.patientID, Patient)
                    .map(res => res.json());
    }
    UpdateAppointmentByID(Appointment) {
        return this.authHttp.put(this.sURL + 'Appointment/Appointment/' + Appointment.appointmentID, Appointment)
                    .map(res => res.json());
    }
    UpdateRaiologyRecordByID(Radiology) {
        return this.authHttp.put(this.sURL + 'MedicalRecord/Radiology/' + Radiology.radiologyHdrID, Radiology)
                    .map(res => res.json());
    }
}
