import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../../../theme/ecommerce/styles'
import { useSelector } from 'react-redux'




RenderCategorie = ({categorie}) => {

    return(
        
        <TouchableOpacity style={styles.toucheCategorie}>

            <Text style={styles.catText}>{categorie?.nom.toLowerCase()}</Text>

        </TouchableOpacity>
    )
}

const Categories = () => {

    const {dataCategorie} = useSelector(state=>state)

        console.log('mes categories :',dataCategorie)

  return (
    <View style={styles.categorieContent}>
      <Text style={styles.categorieTitle}>Categories</Text>
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

