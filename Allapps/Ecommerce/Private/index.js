import { View, Text, FlatList } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth';
import { Button } from '@rneui/themed';
import Commande from '../Components/Commande';

const Deconnexion = () =>{

  auth().signOut()

}

const Index = () => {


  return (
    <View style={{flex:1}}>
      <Text>Mon Compte</Text>
      <Commande/>
      <Button style={{alignItems:'flex-end'}} title="Deconnexion" color={'red'} onPress={Deconnexion} />
    </View>

    
  )
}

export default Index