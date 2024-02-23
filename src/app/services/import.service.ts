import makeCard from "../../dtos/make_card.dto";

class ImportService{

    public async import(){
        let jsonFile = require('../../public/storage/sulamericaodontolooping_1.json');
        const objs = Object.values(jsonFile.flow);
        objs.forEach(function(obj:any){
           makeCard(obj); 
        });
        return jsonFile.flow;
        // return jsonFile.flow.onboarding["$contentActions"];
    }

}

export default new ImportService();