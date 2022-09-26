import { View, Text } from 'react-native'
import React,{useState, useContext} from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button,Input, Icon } from '@rneui/themed'
import Firebase from '../../../firebaseContext/firebase'
import auth from '@react-native-firebase/auth';

//Mes Icons 
import Icone from 'react-native-vector-icons/Feather'
import Incone2 from 'react-native-vector-icons/FontAwesome5'


const Inscription = () => {

    const navigation = useNavigation()
// modifier mon etat de visibilité du mot de passe 
    const [affMonDePasse, setaffMonDePasse] = useState(true);

    const [email, setEmail] = useState();

    const [motDePasse, setMoDePasse] = useState()

// ajout de mon firebase
    const firebase = useContext(Firebase);
    
    const goToConnexion = () => {

        navigation.navigate('Connexion')
      }

    const save = () => {

        console.log('- email:', email,'- mot de passe :', motDePasse)

        auth()
       
            .createUserWithEmailAndPassword(email, motDePasse)
            .then(() => {
            console.log('User account created & signed in!');
            })
            .catch(error => {
            
            console.error(error);
            });
    }


  return (
    <View>
      <Text>Inscription</Text>

      <Input
      
      leftIcon={
        <Icone
          name='at-sign'
          size={24}
          color='black'
        />
      }
       placeholder='Votre e-mail please !'
       onChangeText={value=>setEmail(value)}
    />
      <Input
      
      leftIcon={
        <Icone
          name='lock'
          size={24}
          color='black'
        />
      }
      rightIcon={
        <Incone2
          name={affMonDePasse?'eye-slash':'eye'}
          size={24}
          color='black'
          onPress={()=>setaffMonDePasse(!affMonDePasse)} // action qui change l'etat de affMonDePasse de true a false
        />
      }
       placeholder='Saisissez votre mot de Passe !'
       onChangeText={value=>setMoDePasse(value)}
       secureTextEntry={affMonDePasse}
    />
    <Button title="je m'inscris"  onPress={save} />

      <Button title=' Je me Connecte' type='clear' onPress={goToConnexion} />
      
    </View>
  )
}

export default Inscription