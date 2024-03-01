import { ContentAction } from "../app/models/content_action.model";

export default function make_content_action(content_actions:[])
{
    const content_actions_formated: ContentAction[] = []; 
    content_actions.forEach(function(content_action: any){
        const key:string = Object.keys(content_action)[0];
        const by_pass = (content_action?.[key]?.bypass) ? true : false;
        //input
        const document_type = content_action?.[key]?.["$cardContent"]?.document?.type ?? null;
        const document_content = content_action?.[key]?.["$cardContent"]?.document?.content ?? null;
        //actions
        const action_type = content_action?.[key]?.["$typeOfContent"] ?? null;
        const action_content = content_action?.[key]?.type ?? null;
        //settings
        const settings_type = content_action?.[key]?.settings?.type ?? null;
        const settings_content = content_action?.[key]?.settings?.content ?? null;
        const settings_raw_content = content_action?.[key]?.settings?.rawContent ?? null;
        //mount object
        const content_action_formated = new ContentAction(
            key, 
            by_pass, 
            document_type, 
            document_content, 
            action_type,
            action_content,
            settings_type,
            settings_content,
            settings_raw_content
        );
        // console.log(settings_type)
        content_actions_formated.push(content_action_formated);
    });

    return content_actions_formated;
}