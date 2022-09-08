/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';

import Firebase, {FirebaseContext} from './firebaseContext';

const AppContext = () => { 

    return(

        <FirebaseContext.Provider value={new Firebase()}>
                <App/>
        </FirebaseContext.Provider>
    )

 }

AppRegistry.registerComponent(appName, () => AppContext);
