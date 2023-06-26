import { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from '@firebase/auth'
import { useNavigation } from '@react-navigation/native';
import Logo from '../assets/React-icon.png';
import CustomInput from '../components/Custominput';
import styles from '../styles/styles'
import app from '../firebaseConfig';

export default function Login() {

  const auth = getAuth(app)
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    console.log(auth.currentUser)
    if(auth.currentUser){
      navigation.navigate('Listagem')
    }
  }, [auth.currentUser]);

  const setEmailInputValue = (value) => {
    setEmail(value)
  }

  const setPasswordInputValue = (value) => {
    setPassword(value)
  }

  const criarUsuario = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((dadosUsuario) => {
      console.log(dadosUsuario)
    }).catch((err) =>
      console.error(err));
  }

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((dadosUsuario) =>{
      console.log(dadosUsuario);
    }).catch((err) => {
      console.error(err);
    })
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

      <TouchableOpacity
      onPress={signIn}>
        <View style={styles.button}>
          <Text style={styles.button.text}>Entrar</Text>
        </View>  
      </TouchableOpacity>

    </View>
  );
}

