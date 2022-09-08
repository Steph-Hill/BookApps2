import { ADD_CATEGORIE } from "../type";

import { existItem } from "../../common/fonctions";


//initialisation de l'etat initial de categorie

const initStateCategories = []

// creation de ma function
//state init a 
export default function ( state = initStateCategories,action){

    if (action.type == ADD_CATEGORIE) {
        
        //nouvelle valeur dans action.payload, avec la precedente valeur destructuré ...state

        //VERSION DU IF SIMPLIFIÉE 
        return !existItem ( state, action.payload.id)?[...state,action.payload]:state;

        /* if(existItem(...state,action.payload.id)){

            return [...state,action.payload];

        } else {
        
            return state;

        } */

    } else {
        
            return state;
    }

}