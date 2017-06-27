



import cAttributesStore = CharacterDataStore.cAttributesStore;
export namespace CharacterDataStore {

    export type cAttribute = {
        value?: number;
        cost?: number;
    }

    export type cAttributesStore = {[attributeId:string]: cAttribute};



    export type All = {
        attributes: cAttributesStore
    }
}


export const CharacterAttributeStoreInitialState : cAttributesStore = {
    st: {value:0},
    dx: {value:0},
    iq: {value:0},
    ht: {value:0},
    hp: {cost:0},
    will: {cost:0},
    per: {cost:0},
    fp: {cost:0},
}


export const CharacterDataStoreInitialState : CharacterDataStore.All = {
    attributes: CharacterAttributeStoreInitialState
}