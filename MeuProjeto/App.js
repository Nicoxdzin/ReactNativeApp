import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Listagem from './pages/Listagem';
import styles from './styles/styles';
import Login from './pages/Login';
import Cadastrar from './pages/Cadastrar';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Listagem" component={Listagem} />
        <Stack.Screen name="Cadastrar" component={Cadastrar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

