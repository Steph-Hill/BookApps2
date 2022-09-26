import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

/* Mes Créations */
import Connexion from './Connexion'
import Inscription from './Inscription'


const Stack = createNativeStackNavigator();

const Public = () => {
  return (
  <Stack.Navigator>
    <Stack.Screen name='Connexion' component={Connexion}/>
    <Stack.Screen name='Inscription' component={Inscription}/>
  </Stack.Navigator>
  )
}

export default Public