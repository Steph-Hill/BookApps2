import { StyleSheet, Text, View,FlatList } from 'react-native'
import { Button } from '@rneui/themed'
import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removePanier,removeOnePanier } from '../../../redux/action'
import PanierItem from '../Components/PanierItem'

import firestore from '@react-native-firebase/firestore'



import { styles as ecommerceStyles } from '../../../theme/ecommerce/styles'

import moment from 'moment';



const Panier = () => {

    /***Création de ma commande */

    const addCommande = async () => {//ajout d'async pour att l'exetion pour passer a la suivante(await) 

        

        const commandeValue = {

                    etat:   false,
                    total:  montantTotal,
                    uid : dataUser.uid,
                    data:   moment(new Date()).format('D/M/YY') /**Creation du format de ma date**/
            }
        console.log("dataUser :",dataUser.uid )

        
        /**creation de ma collection : CommandeHillion */
        /**ajout des données dans la table commande avec la fonction : add() */
      const commande = await firestore().collection("CommandeHillion").add(commandeValue) //ajout d'await pour permettre de recuperer la valeur grace à l'async

      console.log('commande id :',commande.id)//chercher l'id de commande

     await dataPanier.map (async element =>{

        //ajout le contenue de ma commande
        await firestore().collection("CommandeHillion").doc(commande.id)
                         .collection('Detail').add(element)//ajout des details du panier, dans la sous collection : Detail de CommandeHillion


      })

      remove();//vide mon panier quand je fait acheter

    }

    const {dataPanier, dataUser} = useSelector(state=>state)
    console.log('dataPanier', dataPanier)


    const [montantTotal, setMontantTotal] = React.useState(400)

    const dispatch = useDispatch();


     //Action de vider
     const remove = () => {
        
        dispatch(removePanier()); //Je vide mon panier
        console.log("Remove")
     }
/**Calcul le somme total de mon panier */
     const totalPanier = () => {

        let total = 0;

        dataPanier.forEach(element => 

                            {
                                /**formule pour calculer le total des prix */
                                total = total + element.prix * element.quantite

                                /***converti le prix en chaine en nombre */
                                 /*  total = total + Number(element.prix) */
                                
                                console.log('total :', total);
                            

                            })

                            /**met a jour le total */
                            setMontantTotal(total);

     } 
     /**cycle de vie de la page de l'appli */
     useEffect(()=>{

        totalPanier();
/***observation du panier lorsque l'on ajout */
    },[dataPanier])
  return (
    <View style={styles.container}>
     <FlatList
        data={dataPanier}
        renderItem={({item})=><PanierItem item={item}/>}
        keyExtractor={item =>item.id}
      />
       <Button
    buttonStyle={styles.ButtonStyle}
      title='Vider le panier'
      onPress={remove}
  
  />
      <View style={styles.bottom}>


{/***Footer Panier */}
       <View style={styles.price}>
            
            <Text  style={ecommerceStyles.articleText}>  {montantTotal} €</Text>
      
       </View>
      
       <View style={styles.acheter}>

            
            <Button
           title='Acheter'
           buttonStyle={styles.ButtonStyle}   
           containerStyle={styles.containerButtonStyle} 
           onPress={addCommande}  
            />
       
       </View>

      </View>
      {/***End Footer Panier */}
    </View>
  )
}

export default Panier

const styles = StyleSheet.create({
    container:{

        flex:1,
        justifyContent:'space-between',
        backgroundColor:'rgba(0, 28, 243, 0.36)'
    },
    bottom:{
        height:100,
        backgroundColor:'rgba(51, 160, 255, 1)',
        flexDirection:'row',
        justifyContent:'space-between',
        
        
    },
    price :{

        flex:1,
        backgroundColor:'rgba(51, 160, 255, 0.36)',
        justifyContent:'center',
        alignItems:'center'
    },
    acheter :{

        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    ButtonStyle:{
        borderRadius:15,
        backgroundColor:'rgba(152, 4, 31, 0.5)',
        height:60,
        margin:20
    },
})