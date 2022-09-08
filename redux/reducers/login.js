import { EDIT_LOGIN } from "../type";

/*  Initialisation de la valeur du StateLogin */

const initStateLogin = false ;

export default function (state = initStateLogin,action){

    switch(action.type){

        case EDIT_LOGIN:{

            return action.payload;

        }

        default:

        return state;

    }

}