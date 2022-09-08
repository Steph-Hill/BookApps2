import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Categories from '../Components/Categories'

import Articles from '../Components/Articles'

const Home = () => {
  return (
    <View style={styles.content}>
        <Categories/>
        <Articles/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    content :{

        flex :1,
        margin:25,

    }
})