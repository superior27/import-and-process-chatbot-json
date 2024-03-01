export class ContentAction{
    constructor(
        public type:string,
        public by_pass:boolean,
        public document_type:string,
        public document_content:string|object,
        
        public action_type_content:string,
        public action_type:string|object,
        public settig_type:string,
        public setting_content: object,
        public setting_raw_content: string,
    ){}
}