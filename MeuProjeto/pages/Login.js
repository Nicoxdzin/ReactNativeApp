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

export default function Login() {

  const auth = getAuth(app)
  const [email, setEmail] = useState();
  const navigation = useNavigation();
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log(auth.currentUser)
  }, [auth.currentUser]);

  const EmailInputValue = (value) => {
    setEmail(value)
  }

  const PasswordInputValue = (value) => {
    setPassword(value)
  }

  // const criarUsuario = () => {
  //   createUserWithEmailAndPassword(auth, email, password)
  //   .then((dadosUsuario) => {
  //     console.log(dadosUsuario)
  //   }).catch((err) =>
  //     console.error(err));
  // }

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((dadosUsuario) =>{
      navigation.navigate('Listagem')
      console.log(dadosUsuario);
    }).catch((err)=> {
      Alert.alert('Usuário não encontrado', 'Tente novamente.', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    })
  }

  return (
    <View style={styles.container}>

      <Image
      source={Logo}
      style={styles.image }>
      </Image>

      <CustomInput value={email}
      funcao={EmailInputValue}
      placeholder='Digite seu email...'>
      </CustomInput>

      <View style={styles.viewInput}>
        <CustomInput value={password}
        placeholder='Digite sua senha...'
        isPassword={passwordVisibility}
        funcao={text => setPassword(text)}>
        </CustomInput>
        <Pressable style={styles.oio} onPress={handlePasswordVisibility}>
          <MaterialCommunityIcons name={rightIcon} size={22} color="#fff" />
        </Pressable>
      </View>
      

      <TouchableOpacity
        onPress={signIn}>
        <View style={styles.button}>
          <Text style={styles.button.text}>Entrar</Text>
        </View>  
      </TouchableOpacity>

    </View>
  );
}

