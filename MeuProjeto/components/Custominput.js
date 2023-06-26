import { TextInput, StyleSheet } from 'react-native';

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

    const styles = StyleSheet.create({
       
        inputStyle: {
        margin: 12,
        padding: 8,
        width: 300,
        height: 55,
        borderRadius: 3,
        backgroundColor: '#164e6e',
        color: '#fff'
        },
    })
export default CustomInput;