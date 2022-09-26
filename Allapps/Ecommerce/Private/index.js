import { View, Text } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth';
import { Button } from '@rneui/themed';

const Deconnexion = () =>{

  auth().signOut()

}

const Index = () => {
  
  return (
    <View>
      <Text>Mon Compte</Text>
      <Button title="Deconnexion" color={'red'} onPress={Deconnexion} />
    </View>

    
  )
}

export default Index