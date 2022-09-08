import { View, Text } from 'react-native'
import React from 'react'

const DetailScreen = ({route}) => {
    const { item } = route.params 
  return (
    <View>
      <Text>{item.title}</Text>
    </View>
  )
}

export default DetailScreen