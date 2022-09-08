import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

import { useSelector } from 'react-redux'

import { useDispatch } from 'react-redux'

import {countNumb} from '../../redux/action'



const Insta = () => {
  const {login, compteur} = useSelector(state => state )

  console.log('ok')

  const dispatch = useDispatch();

  const pressAdd = () => {

    dispatch(countNumb( compteur +100000))

      console.log('Ajouter')
  }

  const nombrePlus = () =>{

    console.log('nombrePlus')

  }

  return (
    <View>
      {login?<Text>Connecté !</Text>:
              <Text>Y pa bon !</Text>}

              <Text> {compteur}$ : Dollars </Text>
              <Button
              title='Ajouter'
              onPress={pressAdd}
              />
    </View>
  )
}

export default Insta

const styles = StyleSheet.create({})