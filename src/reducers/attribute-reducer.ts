import {AggregateDataStore, AggregateDataStoreInitialState} from "../datastore/aggregate-datastore";
import {AttributeAction, AttributeActionTypesConsts} from "../actions/attribute-action-factory";
import * as deepAssign from "deep-assign";
import {SystemDataStore} from "../datastore/system-static-store/system-data-store";

export const AttributeReducer = (state: AggregateDataStore = AggregateDataStoreInitialState, action: AttributeAction): AggregateDataStore => {
    console.log("AttributeReducer."+action.type+"("+JSON.stringify(action)+")");
    let singleAttribute : any =  {};
    switch (action.type) {
        case AttributeActionTypesConsts.SET_PRIMARY_ATTRIBUTE:
            singleAttribute[action.attributeId] = {value:action.value};
            return deepAssign({},state, {character:{attributes:singleAttribute}});
        case AttributeActionTypesConsts.SET_DERIVED_ATTRIBUTE:
            let attributeSystemData = SystemDataStore.attributes[action.attributeId];
            let costInput = action.cost;
            let trueCost = (costInput>0?
                    Math.ceil(costInput/attributeSystemData.costPerRaise):
                    Math.floor(costInput/attributeSystemData.costPerRaise))
                *attributeSystemData.costPerRaise;
            singleAttribute[action.attributeId] = {cost:trueCost};
            return deepAssign({},state,{character:{attributes:singleAttribute}});
        default:
            return state;
    }
}

