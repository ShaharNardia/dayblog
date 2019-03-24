import { Todo } from "./todo";
import { Location } from "./location";

export interface Station {
    id: string;
    title: string;
    startDate: Date;
    endDate: Date;
    toDo: Todo[];
    location: Location[];
}
