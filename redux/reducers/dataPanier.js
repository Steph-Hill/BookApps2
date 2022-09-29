import { ADD_PANIER, REMOVE_PANIER, REMOVE_ONE_PANIER } from "../type";
import { existItem } from "../../common/fonctions";
import { removeOnePanier } from "../action";

const initStatePanier = [];

export default function (state = initStatePanier, action) {

    switch (action.type) {
        case ADD_PANIER:

        console.log('action.payload',action.payload )
            //verification de l'element pas l'id
            //si il n'exist pas, faire
            //creation de l'element
            if (!existItem (state, action.payload.id)) { 

                const item = { ...action.payload, quantite : 1} //destrucsture action.payload pour permettre l'ajout de la quantité dans la table

                return [...state, item]; // destructure state pour ajouter item = { ...action.payload, quantité : 1}, pour modifier mon tableau d'element
                
            } else {

                //find item by id payload for get quantite value
                const findItem = state.find( item => item.id == action.payload.id); // state = contenu du panier

                //find index of item add
                const indexItem = state.findIndex( item => item.id == action.payload.id);

                //update quantite 
                const newItem = { ...findItem , quantite : findItem.quantite + 1 };// destructure l'index selectionner et modifier la quantite avec +1


                //creation de mon tableau modifiable
                //permet de mettre a jour la valeur precedente du state
                let newState = state;

                //ajout de ma modification dans mon tableau modifiable

                newState[indexItem] = newItem;

                return newState;
            }

              /*   return !existItem (state, action.payload.id)

                ?[...state, action.payload]

                : state */
                
        
            break;

        case REMOVE_PANIER:

                //vider mon Panier
                return action.payload;
        

            
            break;

        case REMOVE_ONE_PANIER:
        
        

                //vider un element de mon Panier
                return state.filter(item => item.id != action.payload.id);

            break;
    
        default:

                return state;

            break;
    }

}