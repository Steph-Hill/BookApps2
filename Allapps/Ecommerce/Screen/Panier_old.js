import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

import { removePanier,removeOnePanier } from '../../../redux/action'
import { Button } from '@rneui/base'



const PanierItem = ({item})=>{

  const dispatch = useDispatch();
      //Supprimer un article
      const removeOne = () => {

          dispatch(removeOnePanier(item))

      }
    return(
        <View style={styles.contentPanier}>
            
            <Text style= {styles.nom}>{item.nom}</Text>
           <Text style= {styles.prix}>{item?.prix}€</Text> 
           <Button
           onPress={removeOne}
           title='Supp'
           />


        </View>

    )

}
const Panier = () => {
       
    const {dataPanier} = useSelector(state=>state)
    console.log('dataPanier', dataPanier)

    const dispatch = useDispatch();


     //Action de vider
     const remove = () => {
        
        dispatch(removePanier()); //Je vide mon panier
        console.log("Remove")

    }
  
  
    return (
    <View style={styles.content}>
      <FlatList
        data={dataPanier}
        renderItem={({item})=><PanierItem item={item}/>}
        keyExtractor={item =>item.id}
      />

      <Button
      
          title='Vider le panier'
          onPress={remove}
      
      />
    </View>
  )
}

export default Panier

const styles = StyleSheet.create({

  contentPanier:{
    width:'100%',
    height:120,
   
    padding :5,
    margin:5,
    borderRadius:10,
   
    backgroundColor:'green'

  },
  nom:{

    color:'white',
    fontSize:25,
  },

  prix:{

    color:'white',
    fontSize:25,
  },
  botomButton:{


  },
  content:{

    flex:1,
    justifyContent:'flex-end'
  }




})
/* import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { removePanier ,removeOnePanier } from '../../../redux/action'

const PanierItem = ({item}) => {
    const dispatch = useDispatch()
//supprimer un article
    const removeOne = () => { 
        
        dispatch(removeOnePanier(item))

     }

    

    return(

            <View style={styles.contentPanier}>
                    <Text style={styles.nom}>
                            {item?.nom}
                    </Text>
                    <Text style={styles.prix}>
                            {item?.prix}€
                    </Text> 
                    
                    <Button
                        styles = {styles.removeOne}
                        onPress ={removeOne}
                        title='Supp'
                    />
            </View>

           
                    

    )

}

const Panier = () => {
    const {dataPanier} = useSelector(state=>state)
    console.log('data Panier', dataPanier)
    
    const dispatch = useDispatch()


    const removeAll = () => {

        //je vide mon panier
        dispatch(removePanier);
        console.log('remove', remove) 

    }
  return (
    <View>
        
        <FlatList
        
            data={dataPanier}
            renderItem={({item})=><PanierItem item={item}/>}
            keyExtractor={item=>item.id}

        />

    <Button
    
        onPress={removeAll}
        title='Vider le Panier'

    />


    </View>
  )
}

export default Panier

const styles = StyleSheet.create({
    contentPanier: {
        width:'100%',
        height:100,
        backgroundColor:'red',
        padding:5,
        margin:5,
        borderRadius:10,
        alignSelf:'center'
        
      },
    
      nom: {
        color:'white',
        fontSize:25
      },
    
      prix: {
        color:"black"
      },
}) */