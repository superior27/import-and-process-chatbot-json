import { ConditionOutput } from "../app/models/condition_output.model";


export default function make_condition_output(condition_outputs:[])
{
    const condition_outputs_formated: ConditionOutput[] = []; 
    condition_outputs.forEach(function(condition_output: any){
        const state_id = condition_output?.stateId ?? null;
        const type_state_id = condition_output?.typeOfStateId ?? null;
        const conditions = condition_output?.conditions ?? null;
        //mount object
        const condition_output_formated = new ConditionOutput(
            state_id,
            type_state_id,
            conditions
        );
        condition_outputs_formated.push(condition_output_formated);
    });

    return condition_outputs_formated;
}