import { Todo } from "./todo";

export interface Flight {

    id: string;
    flightNumber: string;
    company: string;
    from:string;
    to:string;
    airport: string;
    departureDate?: Date;
    arrivalDate?: Date;
    notes: string;
    todo: Todo[];
}
