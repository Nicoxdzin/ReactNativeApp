import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native';
import Logo from './assets/React-icon.png';
import CustomInput from './components/Custominput';

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
      placeholder='Digite seu email...'
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    padding: 10,
    margin: 20,
    width:  125,
    height: 110
  },
  button: {
    margin: 30,
    width: 155,
    height: 55,
    backgroundColor: '#326785',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    borderRadius: 6,
    text:{
      color: '#fff'
    }
  }
});
