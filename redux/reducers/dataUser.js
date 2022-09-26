import { EDIT_USER } from "../type";

import { existItem } from "../../common/fonctions";


//initialisation de l'etat initial de categorie

const initStateUser = null

// creation de ma function
//state init a 
export default function ( state = initStateUser,action){

    if (action.type == EDIT_USER) {
        //nouvelle valeur dans action.payload, avec la precedente valeur destructuré ...state
        return action.payload

        
    } else {
        
        return state;
    }

}