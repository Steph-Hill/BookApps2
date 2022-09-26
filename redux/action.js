import { ADD_CATEGORIE, EDIT_LOGIN, ADD_ARTICLE, ADD_PANIER, EDIT_USER, REMOVE_ONE_PANIER, REMOVE_PANIER } from "./type";

import { COUNT_NUMB } from "./type";

export const editlogin = (login) => ({

    type : EDIT_LOGIN,
    payload : login

})

export const countNumb = ( compteur ) => ({

    type : COUNT_NUMB,
    payload : compteur

})

export const addCategorie = ( categorie ) => ({

    type : ADD_CATEGORIE,
    payload : categorie
})
export const addArticle= ( article ) => ({

    type : ADD_ARTICLE,
    payload : article
})

export const addPanier = (panier) => ({
    type: ADD_PANIER,
    payload: panier
});

export const removePanier = () => ({
    type: REMOVE_PANIER,
    payload: []
});
export const removeOnePanier = (panier) => ({
    type: REMOVE_ONE_PANIER,
    payload: panier
});
export const editUser = (user) => ({
    type: EDIT_USER,
    payload: user
});