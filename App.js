import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FirstScreen from './Allapps/First';

import Insta from './Allapps/Insta';

import News from './Allapps/AppNews';

import Tuto from './Allapps/TutoFlatlist';

import DetailScreen from './Allapps/AppNews/detail';

import Ecommerce from './Allapps/Ecommerce';

import store from './redux/store';

import { Provider } from 'react-redux';

import auth from '@react-native-firebase/auth';

import TutoFireList from './Allapps/TutoFireList'



const Stack = createNativeStackNavigator();


const App = () => {
  auth()
  .signInAnonymously()
  .then(() => {
    console.log('User signed in anonymously');
  })
  .catch(error => {
    if (error.code === 'auth/operation-not-allowed') {
      console.log('Enable anonymous in your firebase console.');
    }

    console.error(error);
  });
  return (
    
    <Provider store={store}>
        <NavigationContainer>

            <Stack.Navigator screenOptions={{ headerShown: false }}>
                
                <Stack.Screen name="First" component={FirstScreen} />
                {/* AppInsta screens */}
                <Stack.Screen name="AppInsta" component={Insta} />
                {/* news App screens */}
                <Stack.Screen name="AppNews" component={News} />
                {/* DetailScreen News */}
                <Stack.Screen name='DetailScreen' component={DetailScreen}/>
                {/* TutoScreen News */}
                <Stack.Screen name="AppTuto" component={Tuto} />
                {/* Ecommerce App creen */}
                <Stack.Screen name="AppEcommerce" component={Ecommerce} />
              
                {/* AppTutoFireList Screen News */}
                <Stack.Screen name="AppTutoFireList" component={TutoFireList} />
                


                            
            </Stack.Navigator>

        </NavigationContainer>
    </Provider>
 
  )
}

export default App

const styles = StyleSheet.create({})