import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'


import { useSelector } from 'react-redux'

import { useNavigation } from '@react-navigation/native';





const RenderArticle = ({article}) => {

    const navigation = useNavigation();

    const onPressArticle = () => { 

        navigation.navigate('DetailArticle', {id: article.id})
     }

    return(
        
        <TouchableOpacity style={styles.toucheArticle} 
                          onPress={onPressArticle}
                          >

            <Text style={styles.catText}>{article.nom}</Text>
            <Image style={styles.image} source={{uri:article.image}}/>

           

        
           



        </TouchableOpacity>
    )
}

const Articles = () => {

    const {dataArticle} = useSelector(state=>state)

        console.log('mes articles ',dataArticle)

  return (
    <View style={styles.content}>
      <Text style={styles.title}> Mes Articles</Text>
      <FlatList
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

const styles = StyleSheet.create({

    content :{
        
        
        flex:1,

       
    },

    title :{
        fontSize:25,
        color:'green',
        fontWeight:'700'
    },
    toucheArticle:{

        backgroundColor:'rgba(58, 226, 145, 1)',
        margin : 10,
        padding:10,
        borderRadius:10,
        height:200,
        width:150
    },
    catText:{

        fontSize:16,
        fontWeight:'500',
        color:'white',
        flexDirection:'row',
        justifyContent:'center'

    },
    image:{
        height:120,
        width:120,
        backgroundColor :'black'
    }, 

    description:{

        backgroundColor:'red',
        height: 200,
        color:'white'

    }


})