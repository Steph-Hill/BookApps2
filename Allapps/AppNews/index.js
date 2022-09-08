import {Text, FlatList,Button, ActivityIndicator } from 'react-native'
import React from 'react'


import ItemNews from './components/ItemNews'

import { useState, useEffect } from 'react'

import { apiNews } from './function/api'

import RenderEmptyComponent from './components/RenderEmptyComponent'

const NewsScreen = ({navigation}) => {

    /* useState contient un setteur(setNews) et un getteur(getNews) */
    /* setNews remplit getNews */
    

    const [getNews, setNews] = useState([])

    //indicateur du waiting 
    const [waiting , setWaiting ] = useState(false)

    //Gestion de ma pagination

    const [getPage, setPage] = useState(1)

    //Page suivante (load More)
    const nextPage = async () => { 

        //Va à la page suivante
        setPage(getPage + 1)

        loadNews();
        
        
        console.log('pages :' , getPage)
     }



    /* creation de l'action de l'ajout */
    const loadNews = async () => { 
        
        
       
       //charge nouvelle page d'aricles avec page suivante
       const articles = await apiNews(getPage);

       //permet le declenchement de l'Activityincicator 
       setWaiting(true);

       //creation des nouveaux articles avec un retardataire de 2 secondes
       setTimeout (()=>{

                      //Ajout de mes Articles
                      //destructure les articles et le tableau getNews
                      setNews([...getNews, ...articles])

                      //arrete mon activityindicator(waiting)
                       setWaiting(false)

                      }, 2000)
      

     }


     useEffect(()=>{

      //Applique un waiting de 5 sec
      setWaiting(true);
        //initialisation de mes Articles
        loadNews()

     },[]) 


  return (
    <FlatList
        ListHeaderComponent={<Button
                                title='Page Suivant'
                                onPress={nextPage} // utilisation de l'action
                                />}
        data={getNews} //recoit les données de setNews
        renderItem = {({item})=><ItemNews item={item} navigation={navigation}/>}
        keyExtractor = {(item, index ) => 'key'+ index}
        ListEmptyComponent={<RenderEmptyComponent waiting={waiting}/>}
        //si waiting true et la taille de getNews > 0 afficher l'activityIndicator 
        ListFooterComponent={(waiting && getNews.length > 0 ) && <ActivityIndicator/>}
    />
  )
}

export default NewsScreen

