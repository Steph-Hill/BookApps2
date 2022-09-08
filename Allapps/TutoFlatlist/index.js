import { View, Text,FlatList,Button } from 'react-native'
import React from 'react'

import { useState } from 'react'

import firestore from '@react-native-firebase/firestore';


const Tuto = () => {

    const [getNombre, setNombre] = useState([1,2,3,4])

 const addtNombre = async () => { 

  await readStagiaire();
    console.log(getNombre.length)

    const tempNombre = [...getNombre , getNombre.length+1]
       
    console.log(tempNombre)

       setNombre(getNombre)
       
    } 

    const readStagiaire = async () => {

      const user = await firestore().collection('stagiaires').doc('sLEc18YruKEKp0WbhYZR').get();
      console.log('user', user)

    }

  return (
   
    <FlatList
        ListHeaderComponent={<Button
                                title='Add'
                                onPress={readStagiaire}
                                />}
        data={getNombre}
        renderItem={({item})=><Text>{item}</Text>}
        keyExtractor={item => item}
        onEndReached={addtNombre}
        onEndReachedThreshold={0.1}
    />

  )
}

export default Tuto