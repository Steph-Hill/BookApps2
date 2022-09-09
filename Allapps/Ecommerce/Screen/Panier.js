import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { removePanier ,removeOnePanier } from '../../../redux/action'

const PanierItem = ({item}) => {
    const dispatch = useDispatch()

    const removeOne = () => { 
        
        dispatch(removeOnePanier(item))

     }

    

    return(

            <View style={styles.contentPanier}>
                    <Text style={styles.nom}>
                            {item.nom}
                    </Text>
                    <Text style={styles.prix}>
                            {item.prix}€
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

    const remove = () => {

        //je vide mon panier
        dispatch(removePanier);
        console.log('remove', remove)

    }
  return (
    <View>
        
        <FlatList
        
            data={dataPanier}
            renderItem={({item})=><PanierItem/>}
            keyExtractor={item=>item.id}

        />

    <Button
    
        onPress={remove}
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
})