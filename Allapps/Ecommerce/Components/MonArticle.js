import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'

import { addPanier } from '../../../redux/action'

const MonArticle = ({article}) => {

  const dispatch = useDispatch();

  const ajouter = () => {

      dispatch (addPanier(article))
  console.log("ajouter")

  }

  return (
    <View>
      <Image
      source={{uri:article.image}}
      style={styles.imageArticle}
      />

      
      <Text>{article.nom}</Text>
      

      <View>

          <TouchableOpacity style = {styles.panier} onPress = {ajouter}>

            <Text style = {styles.textpanier}>Ajouter à mon Panier</Text> 

          </TouchableOpacity>

      </View>
      
    </View>
  )
}

export default MonArticle

const styles = StyleSheet.create({
  panier: {
    backgroundColor:'#e9b87c',
    borderRadius:10,
    padding:5,
    marginTop:10,
    width:200,
    height:40,
    alignSelf:'flex-end'

  },

  textpanier: {
    color:'black',
    fontSize:18,
    textAlign:'center'
  },

  headerAccueil: {
    height:50,
    width:"100%",
    backgroundColor:'#e9b87c',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:"center",
    padding:10,
},

  nomHeader: {
  fontSize:18,
  color:'black',
  alignSelf:'center'
  },
  imageArticle:{
  height:300,
  borderRadius:50,
  margin:50



  }
})