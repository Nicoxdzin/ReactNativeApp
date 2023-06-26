import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native';
import Logo from './assets/React-icon.png';
import CustomInput from './components/Custominput';
import styles from './styles/styles'

export default function App() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const setEmailInputValue = (value) => {
    setEmail(value)
  }

  const setPasswordInputValue = (value) => {
    setPassword(value)
  }


  return (
    <View style={styles.container}>

      <Image
      source={Logo}
      style={styles.image }>
      </Image>

      <CustomInput value={email}
      funcao={setEmailInputValue}
      placeholder='Digite seu email...'>
      </CustomInput>
      <CustomInput value={password}
      funcao={setPasswordInputValue}
      placeholder='Digite sua senha...'
      isPassword={true}>
      </CustomInput>

      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.button.text}>Entrar</Text>
        </View>  
      </TouchableOpacity>

    </View>
  );
}
