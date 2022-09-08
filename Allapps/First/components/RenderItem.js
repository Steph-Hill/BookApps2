import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

import { styles } from '../theme/style'

import { useNavigation } from '@react-navigation/native';


const RenderItem = ({item}) => {

    const navigation = useNavigation();

/* identification de l'element par le nom */     
    const openApp = () => { 


        navigation.navigate(item.nomApp);
      }
      
  return (
    <TouchableOpacity onPress={openApp} style={styles.content}>
      <Text style={styles.titre} >{item.titre}</Text>
    </TouchableOpacity>
  )
}

export default RenderItem

