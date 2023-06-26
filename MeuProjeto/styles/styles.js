import { StyleSheet } from 'react-native';
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
    },
    navbar: {
      backgroundColor: '#328fa8',
    }
  });

  export default styles;