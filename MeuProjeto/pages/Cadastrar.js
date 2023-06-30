import { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, Alert, Pressable } from 'react-native';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from '@firebase/auth'
import { useNavigation } from '@react-navigation/native';
import Logo from '../assets/React-icon.png';
import CustomInput from '../components/Custominput';
import styles from '../styles/styles'
import app from '../firebaseConfig';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTogglePasswordVisibility } from '../components/useTogglePasswordVisibility';
import axios from 'axios';

export default function Cadastrar() {

  
  // const criarUsuario = () => {
  //   createUserWithEmailAndPassword(auth, email, password)
  //   .then((dadosUsuario) => {
  //     console.log(dadosUsuario)
  //   }).catch((err) =>
  //     console.error(err));
  // }

  const [amount, addAmount] = useState()
  const [reference, addReference] = useState()
  const [date, addDate] = useState()

  const AmountInputValue = (value) => {
    addAmount(value)
  }

  const ReferenceInputValue = (value) => {
    addReference(value)
  }

  const DateInputValue = (value) => {
    addDate(value)
  }

 

  const AddTransactions = async() => {
    console.log('EUAIHEIUAHEUIWSHIU')
    try{
        const response = await axios.post('http://localhost:3000/transactions', {amount, reference, date });
        console.log(response);
        Alert.alert('Sucesso', 'Usuário cadastrado', [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
    } 
    catch (err) {
        console.log(err)
        Alert.alert('Erro', 'Tente novamente.', [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
    } 
  }


  return (
    <View style={styles.container}>

      <CustomInput value={amount}
      funcao={AmountInputValue}
      placeholder='Digite o valor...'>
      </CustomInput>
      <CustomInput value={reference}
      funcao={ReferenceInputValue}
      placeholder='Digite a referencia...'>
      </CustomInput>
      <CustomInput value={date}
      funcao={DateInputValue}
      placeholder='Data...'>
      </CustomInput>


      <TouchableOpacity
         onPress={AddTransactions}
        >
        <View style={styles.button}>
          <Text style={styles.button.text}>Cadastrar</Text>
        </View>  
      </TouchableOpacity>

    </View>
  );

  }


