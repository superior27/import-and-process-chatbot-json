import { Card } from "../app/models/card.model";
import { ConditionOutput } from "../app/models/condition_output.model";
import { ContentAction } from "../app/models/content_action.model";
import { EnteringCustomAction } from "../app/models/entering_custom_action.model";
import make_condition_output from "./make_condition_output.dto";
import make_content_action from "./make_content_action.dto";
import make_entering_custom_action from "./make_entering_custom_action.dto";

export default function make_card(card:any)
{
    const id: string = card?.id;
    const content_actions: ContentAction[] = make_content_action((card["$contentActions"] as []));
    const condition_outputs: ConditionOutput[] = make_condition_output((card["$conditionOutputs"] as []));
    const entering_custom_actions: EnteringCustomAction[] = make_entering_custom_action((card["$enteringCustomActions"] as []));  
    
    const card_formated: Card = new Card(id, content_actions, condition_outputs);
    // console.log(card_formated);
    // content_actions.forEach(function(content_action){
    //     console.log(content_action.setting_content);
    // });
}