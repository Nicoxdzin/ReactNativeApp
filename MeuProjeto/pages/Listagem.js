import { Text, View } from 'react-native';
import styles from '../styles/styles'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Listagem() {
  const [transactions, setTransactions] = useState([]);
  const navigation = useNavigation();

  function NewUser(){
    navigation.navigate('Cadastrar')
  }

  useEffect(() => {
    const getTransactions = async() => {
      try{
        const response = await axios.get('http://localhost:3000/transactions');
        if(response.status === 200){
          setTransactions(response.data)
        }
      } 
      catch (err) {
          console.log(err)
      } 
    }

    getTransactions()

  }, [] )

  return (
    <View style={styles.containerList}>

      <TouchableOpacity
        onPress={NewUser}>
        <View style={styles.button}>
          <Text style={styles.button.text}>Entrar</Text>
        </View>  
      </TouchableOpacity>

        <Text>Listagem</Text>
        { transactions.map((transaction, index) => {
          return (
            <View>
              <Text>{transaction.amount}</Text>
              <Text>{transaction.reference}</Text>
              <Text>{transaction.date}</Text>
            </View>
          )
        })}
    </View>
  );
}

