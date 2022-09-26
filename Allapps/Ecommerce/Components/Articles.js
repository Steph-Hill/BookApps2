import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'


import { useSelector } from 'react-redux'

import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../theme/ecommerce/styles';





const RenderArticle = ({article}) => {

    const navigation = useNavigation();

    const onPressArticle = () => { 

        navigation.navigate('DetailArticle', {id: article.id})
     }

    return(
        
        <TouchableOpacity style={styles.toucheArticle} 
                          onPress={onPressArticle}
                          >

            <Text style={styles.articleText}>{article.nom}</Text>
            <Image style={styles.image} source={{uri:article.image}}/>

           <Text style={styles.articleText}>{article.prix} € </Text>

        
           



        </TouchableOpacity>
    )
}

const Articles = () => {

    const {dataArticle} = useSelector(state=>state)

        console.log('mes articles ',dataArticle)

  return (
    <View style={styles.articleContent}>
      <Text style={styles.articleTitle}> Mes Articles</Text>
      <FlatList 
        columnWrapperStyle={styles.row}
        style={{margin:5}}
        data={dataArticle}
        renderItem={({item}) => <RenderArticle
                                article={item}/>}
        keyExtractor={item=>item.nom}
        horizontal={false}
        numColumns={2}
      />
    </View>
  )
}

export default Articles

