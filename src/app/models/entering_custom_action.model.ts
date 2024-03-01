export class EnteringCustomAction{
    constructor(
        public state_id:string,
        public type_state_id:string,
        public conditions:[],
    ){}
}