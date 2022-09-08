import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

import { useDispatch } from 'react-redux'
import {editlogin } from '../../../redux/action'


const index = () => {
    
    const dispatch = useDispatch();

  const pressConnexion = () => {

    dispatch(editlogin(false))

        console.log('deconnexion')

  }
  return (
    <View>
      <Text>Tu es connecté!</Text>

      <Button
      title='deconnexion !'
      onPress={pressConnexion}
      color={'red'}
      />
    </View>
  )
}

export default index

const styles = StyleSheet.create({})