import { EnteringCustomAction } from "../app/models/entering_custom_action.model";


export default function make_entering_custom_action(entering_custom_actions:[])
{
    const entering_custom_actions_formated: EnteringCustomAction[] = []; 
    entering_custom_actions.forEach(function(entering_custom_action: any){
        console.log(entering_custom_action);
        // const state_id = entering_custom_action?.stateId ?? null;
        // const type_state_id = entering_custom_action?.typeOfStateId ?? null;
        // const conditions = entering_custom_action?.conditions ?? null;
        //mount object
        // const entering_custom_action_formated = new EnteringCustomAction(
        //     state_id,
        //     type_state_id,
        //     conditions
        // );
        // entering_custom_actions_formated.push(entering_custom_action_formated);
    });

    return entering_custom_actions_formated;
}