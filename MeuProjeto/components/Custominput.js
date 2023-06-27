import { TextInput, StyleSheet } from 'react-native';
import styles from '../styles/styles';

const CustomInput = (props) => {
    return(
        <TextInput 
        style={styles.inputStyle}
        placeholder= {props.placeholder}
        value={props.value}
        onChangeText={props.funcao}
        secureTextEntry={props.isPassword ? true : false}
        placeholderTextColor={'#e3e6e8'}>  
        </TextInput>
    )
}
export default CustomInput;