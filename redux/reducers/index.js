import { combineReducers } from "redux";

import login from "./login";

import compteur from "./compteur";

import dataCategorie from "./dataCategorie";

import dataArticle from "./dataArticle";

import dataPanier from "./dataPanier";

import dataUser from "./dataUser";

export default combineReducers({login,
                                compteur,
                                dataCategorie,
                                dataArticle,
                                dataPanier,
                                dataUser});