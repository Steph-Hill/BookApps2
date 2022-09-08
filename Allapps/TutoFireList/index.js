import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import firestore from '@react-native-firebase/firestore';



const Item = ({ nom, prenom}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{ nom }</Text>
    <Text style={styles.title}>{ prenom }</Text>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item nom={item.nom} 
        prenom={item.prenom} 
    image={item.image}
    
                        />
    
  );

const [data, setData] = useState([])/* 
  onResult = () => {

    console.log('Result');

  }

  onError = () => {

    console.log('Error');

  } */

// chargement de mon composant
    useEffect( () => {


        firestore().collection('HillionCollection').onSnapshot(Snapshot => {


           let dataTemp = [];



           // console.log('Snapshot', Snapshot)

           // Ajout de données recu en live dans un tableaus
           Snapshot.forEach(document=>{

            dataTemp.push({ id : document.id, ...document.data() });
            setData(dataTemp)
                console.log('document', dataTemp)

           });

        });

    }, [] )
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'rgba(175, 217, 69, 0.8)',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;