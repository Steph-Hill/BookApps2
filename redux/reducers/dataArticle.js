import { ADD_ARTICLE } from "../type";

import { existItem } from "../../common/fonctions";


//initialisation de l'etat initial de categorie

const initStateArticles = []

// creation de ma function
//state init a 
export default function ( state = initStateArticles,action){

    if (action.type == ADD_ARTICLE) {
        //nouvelle valeur dans action.payload, avec la precedente valeur destructuré ...state
        return !existItem ( state, action.payload.id)?[...state,action.payload]:state;

        
    } else {
        
        return state;
    }

}