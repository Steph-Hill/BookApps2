import { StyleSheet, Text, View,FlatList } from 'react-native'
import { Button } from '@rneui/themed'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removePanier,removeOnePanier } from '../../../redux/action'
import PanierItem from '../Components/PanierItem'




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
    <View style={styles.container}>
     <FlatList
        data={dataPanier}
        renderItem={({item})=><PanierItem item={item}/>}
        keyExtractor={item =>item.id}
      />
       <Button
      
      title='Vider le panier'
      onPress={remove}
  
  />
      <View style={styles.bottom}>


{/***Footer Panier */}
       <View style={styles.price}>
            
            <Text >  Prix</Text>
      
       </View>
      
       <View style={styles.acheter}>

            
            <Button
            title='Acheter'
           buttonStyle={styles.ButtonStyle}   
           containerStyle={styles.containerButtonStyle}   
            />
       
       </View>

      </View>
      {/***End Footer Panier */}
    </View>
  )
}

export default Panier

const styles = StyleSheet.create({
    container:{

        flex:1,
        justifyContent:'space-between',
        backgroundColor:'red'
    },
    bottom:{
        height:100,
        backgroundColor:'green',
        flexDirection:'row',
        justifyContent:'space-between',
        
        
    },
    price :{

        flex:1,
        backgroundColor:'orange',
        justifyContent:'center',
        alignItems:'center'
    },
    acheter :{

        flex:1,
        backgroundColor:'yellow',
        justifyContent:'center',
        alignItems:'center'
    },
    ButtonStyle:{
        borderRadius:20,
        backgroundColor:'#ccc'
    },
})