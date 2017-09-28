export interface MedicationList {
    medicationCode: string; // required field with minimum 5 characters
    prescription: Prescription[]; // user can have one or more addresses
}

export interface Prescription {
    chargeItemID: number;  // required field
    stockLockingID: number;
    drugCode: string;  // required field
    drugName: string;  // required field
    dosage: string;  // required field
    take: number;
    time: number;
    day: number;
    totalQuantity: number;
    inventoryUOMID: string;
    originalPrice: number;
    discountPerc: number;
    discountAmount: number;
    billPrice: number;
    route: string;
    whenNecessary: boolean;
    instruction1: string;
    instruction2: string;
    indication: string;
    availQty: number;
    medicationLnID: number;
    billingRef: string;

}