import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

import { useSelector } from 'react-redux'




RenderCategorie = ({categorie}) => {

    return(
        
        <TouchableOpacity style={styles.toucheCategorie}>

            <Text style={styles.catText}>{categorie.nom}</Text>

        </TouchableOpacity>
    )
}

const Categories = () => {

    const {dataCategorie} = useSelector(state=>state)

        console.log('mes categories :',dataCategorie)

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Categories</Text>
      <FlatList
        data={dataCategorie}
        renderItem={({item}) => <RenderCategorie
                                categorie={item}/>}
        keyExtractor={item=>item.nom}
        horizontal={true}
      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({

    content :{
        
        
        width:'100%',
        height:100
       
    },

    title :{
        fontSize:25,
        color:'green',
        fontWeight:'700'
    },
    toucheCategorie:{

        backgroundColor:'rgba(58, 226, 145, 0.8)',
        margin : 10,
        padding:10,
        borderRadius:10,
        height:45,
        width:150
    },
    catText:{

        fontSize:16,
        fontWeight:'500',
        color:'white',
        flexDirection:'row',
        justifyContent:'center'

    }


})