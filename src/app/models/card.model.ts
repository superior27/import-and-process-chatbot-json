import { ConditionOutput } from "./condition_output.model";
import { ContentAction } from "./content_action.model";

export class Card {

    constructor(
        public id: string,
        public content_actions: ContentAction[],
        public condition_outputs: ConditionOutput[]
    ){}
    
}