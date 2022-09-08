import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, {useState, useEffect} from 'react'
import { FirebaseContext } from '../../../firebaseContext';
import { useContext } from 'react';
import MonArticle from '../Components/MonArticle';

const NoArticle = () => {

  return (<Text> Pa ni Ayen !</Text>)
  
}


const DetailArticle = ({route}) => {
 //recup de l'id via params
    const { id } = route.params ;

    console.log('id :', id)

    //utilisation de mon state
    const [article, setArticle] = useState(null)

    //utilise de mon loading
    const [ load , setload ] = useState(false); 

    //communication avec mon fireBase
    const firebase = useContext(FirebaseContext)

    //preparation de mon action
    //fonction async
    const getArticle = async () => { 
      
      //chargement avant la requete
      setload(true);

      //recup des donnes depuis firebase
      const rqArticle = await firebase.getArticleById(id)

      // temps de chargement de 500ms
      setTimeout(()=>{

        setArticle(rqArticle.data())
          //arrete le chargement
          setload(false);
      },500)
          

      console.log(rqArticle.data())
      
     }


     //Chargement de mon tableau
     useEffect(()=>{

        getArticle();

     },[])

  return (
    <View>
        {  
          (load == true)?<ActivityIndicator/>:

          
          (article == null )?<NoArticle/> : 
            
            <MonArticle/>
          
          }
    </View>
  )
}

export default DetailArticle

const styles = StyleSheet.create({})