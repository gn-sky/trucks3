import { Truck } from "./truck";

export interface TruckRow extends Truck {
    action: 'edit' | 'delete';
}
