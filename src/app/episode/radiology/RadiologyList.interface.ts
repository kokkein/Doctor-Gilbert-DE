export interface RadiologyList {
    RadiologyCode: string; // required field with minimum 5 characters
    Radiology: Radiology[]; // user can have one or more addresses
}

export interface Radiology {
    radiologyCode: string;  // required field
    analysis: string;  // required field
    price: number;
    discPerc: number;
    discAmt: number;
    totalPrice: number;
}