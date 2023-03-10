import { Guid } from "guid-typescript";

export class Todo {
    constructor(
        public id: Guid,
        //Guid - Global unique identifier. 128 bit structure. used where no two objects should have the same ID
        public todoName: string,
        public isComplete: boolean

    ) { }
}