import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'

import {editlogin } from '../../../redux/action'

const Connexion = () => {
  
    const dispatch = useDispatch();

  const pressConnexion = () => {

    dispatch(editlogin(true))

      console.log('connexion')
  }
  return (
    <View>
      <Text>index</Text>
      <Button
            title='CONNEXION'
            onPress={pressConnexion}
            />
    </View>
  )
}

export default Connexion

const styles = StyleSheet.create({})