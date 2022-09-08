import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FirebaseContext } from '../../../firebaseContext'



const MonArticle = ({article}) => {

    

  return (
    <View>
      <Text>{article.nom}</Text>
    </View>
  )
}

export default MonArticle

const styles = StyleSheet.create({})