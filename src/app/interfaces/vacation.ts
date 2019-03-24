import { Todo } from "./todo";
import { Station } from "./station";
import { Flight } from "./flight";

export interface Vacation {
    id:string,
    userId: string[];
    title: string;
    startDate: Date;
    endDate: Date;
    flights: Flight[];
    toDo:Todo[];
    station: Station[];

}
