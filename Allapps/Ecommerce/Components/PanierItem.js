import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';
import { removeOnePanier } from '../../../redux/action';
import { ListItem,Button,Icon,Avatar } from "@rneui/themed";
import { ListItemContent } from '@rneui/base/dist/ListItem/ListItem.Content';


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
  
  <Avatar title={item.nom[0]} source={{ uri:item.image}} />

  <ListItem.Content>
    <ListItem.Title>{item.nom} </ListItem.Title>
    <ListItem.Title>{item.prix}€ </ListItem.Title>
   
  </ListItem.Content>
  <ListItem.Chevron />
</ListItem.Swipeable>
  )
}

export default PanierItem

const styles = StyleSheet.create({})