import { View, Text,Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'

import { styles } from '../theme/style'

import { colors } from '../theme/color'

import { useNavigation } from '@react-navigation/native';

/* import DetailNews from './DetailNews';
 */



const ItemNews = ({item}) => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.content}
    //le lien vers la navigation
    onPress={()=>navigation.navigate("DetailScreen",{item})}>

        <View style={styles.viewImg}>

               <Image style={styles.image} source={{uri:item.urlToImage}}/> 

        </View>

        <View style={styles.viewText}>
            
            <Text>{item.title}</Text>

            <Button
              title='Voir Plus'
              onPress={() => navigation.navigate('DetailNews',{
                item : item
                
              })}
            />
        
        </View>
      

    </TouchableOpacity>
  )
}

export default ItemNews