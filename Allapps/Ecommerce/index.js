import  React, {useContext, useEffect} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { FirebaseContext } from '../../firebaseContext';


import { useDispatch } from 'react-redux'


import { addCategorie } from '../../redux/action';

import { addArticle } from '../../redux/action';


import DetailArticle from './Screen/DetailArticle';

import Home from './Screen/Home';

import Setting from './Screen/Setting';


const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const Accueil = () => { 
  
    return(
      <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="DetailArticle" component={DetailArticle} />
      </Stack.Navigator>
    )

 }

const App = () => {

    const  dispatch = useDispatch();

  const firebase = useContext(FirebaseContext)

    const initCategories = async () => {

        const categories = await firebase.getCategories();

        //je verifie si j'ai des infos
        //console.log('categories.empty', categories.empty)

        if (!categories.empty) {
          //console.log(' negation de categories.empty', categories.empty)

          //console.log("y ranpli !")

          //lit les donnees de categorie
              categories.forEach( categorieData =>{

                // vérification de categorieData.id
                //console.log('categorieData.id :', categorieData.id)

                

                const temCategorie = {
                                        id : categorieData.id,
                                        nom : categorieData.data().nom
                                          }
                  //version destructurée
                                          /* {
                                            id : categorieData.id,,
                                            ...categorieData.data()

                                          } */
                // verification de mes categogies
                //console.log("Mes Categories :", categorieData.data())
                              
                
                dispatch(addCategorie(temCategorie))

              }


          )
          
        }

    }
    const initArticles = async () => {

        const articles = await firebase.getArticles();

        console.log('articles.empty',articles.empty)
        if (!articles.empty) {

         // console.log("y ranpli !")

          //lit les donnees de article
              articles.forEach( articleData =>{

                const tempArticle = {
                                        id : articleData.id,
                                        nom : articleData.data().nom
                                          }
                  //version destructurée
                                          /* {
                                            id : categorieData.id,,
                                            ...categorieData.data()

                                          } */
                
                //VERIFICATION DES ARTICLES
                console.log("Mes Articles :", articleData.data())
                              
                
                dispatch(addArticle(tempArticle))

              }


          )
          
        }

    }

  //initialisation de la page
  useEffect(()=>{


    initCategories();
    
    initArticles();

  },[])

  return (
    
    
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Accueil" component={Accueil} />
        <Tab.Screen name="Compte" component={Setting} />

      </Tab.Navigator>
  
  )
}




export default App;  