import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';
import { removeOnePanier } from '../../../redux/action';
import { ListItem,Button,Icon,Avatar } from "@rneui/themed";
import { ListItemContent } from '@rneui/base/dist/ListItem/ListItem.Content';
import { ListItemSubtitle } from '@rneui/base/dist/ListItem/ListItem.Subtitle';

import { styles } from '../../../theme/ecommerce/styles';


const PanierItem = ({item}) => {
    const dispatch = useDispatch();
      //Supprimer un article
      const removeOne = () => {

          dispatch(removeOnePanier(item))

      }
  return (
    <ListItem.Swipeable
  
  rightContent={(reset) => (
    <Button
      title="Delete"
      onPress={() => removeOne()}
      icon={{ name: 'delete', color: 'white' }}
      buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
    />
  )}
>
  
  <Avatar title={item.nom[0]} source={{ uri:item.image}} size={150}/>

  <ListItem.Content>
    <ListItem.Title style={styles.articleText}>{item.nom} </ListItem.Title>
    <ListItemSubtitle style={styles.articleText}>{item.prix}€</ListItemSubtitle>
    <ListItemSubtitle style={styles.articleText}> Quantité : {item.quantite}</ListItemSubtitle>

   
  </ListItem.Content>
</ListItem.Swipeable>
  )
}

export default PanierItem
