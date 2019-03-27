import { Todo } from "./todo";
import { Location } from "./location";
import { Flight } from "./flight";

export interface Vacation {
    id:string,
    userId: string[];
    title: string;
    startDate: Date;
    endDate: Date;
    flights: Flight[];
    toDo:Todo[];
    location: Location[];

}
