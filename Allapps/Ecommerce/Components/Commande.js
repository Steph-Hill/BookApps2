import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import { ListItem, Icon } from "@rneui/themed";
import firebase  from '@react-native-firebase/firestore';


const Commande = () => {
    const [dataCommande, setDataCommande] = React.useState([{id:1, total:"20"}])

    
    React.useEffect(() => {
      //lister les 10 premières commandes en temps réel
        firebase().collection('CommandeHillion').limit(10).onSnapshot(snapShot=>{

            console.log('snapShot', snapShot);

            if(!snapShot.empty){// on verifie qu'il y a des commandes

                console.log('ici')

                //on boucle sur la collection CommandeHillion
                snapShot.docs.forEach(commandeUser=>{

                    console.log('id commande :',commandeUser.id)

                    /**setDataCommande permet l'ajout des nouveaux éléments en temps réel   */
                    setDataCommande([...dataCommande,{
                                                        id:commandeUser.id,
                                                        ...commandeUser.data()
                                                            }])

                })
            }

        })
    
    }, [])//chargement de la page []
    

    const ItemCommande = ({item}) => {

        return (
        <ListItem bottomDivider>

            <Icon name="av-timer" />

                <ListItem.Content>

                    <ListItem.Title>{item.total}</ListItem.Title>
                
                </ListItem.Content>

            <ListItem.Chevron />

        </ListItem>
          )
    }

  return (
    <View>
      <Text>Commande</Text>
      <FlatList
        data={dataCommande}
        renderItem={({item})=><ItemCommande item = {item}/>}
        keyExtractor={item=>item.id}
      
        />
    </View>
  )
}

export default Commande

const styles = StyleSheet.create({})