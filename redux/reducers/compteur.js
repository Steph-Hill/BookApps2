import { COUNT_NUMB } from "../type";

const initStateCompteur = 0;

export default function (state = initStateCompteur,action){

    switch(action.type){

        case COUNT_NUMB:{

            return action.payload;

        }

        default:

        return state;

    }

}