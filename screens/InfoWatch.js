import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PerfilWatch from '../assets/perfil-watch.png';
import IconPerfil from '../assets/icon-perfil.png';

const InfoWatch = () => {
  return (
    <ImageBackground source={PerfilWatch} style={styles.background}>

      <View style={styles.viewSuperior}>
        <Image source={IconPerfil} style={{ width: 70, height: 70, resizeMode: 'contain'}}></Image>
        <Text style={{fontSize: 20, marginTop: 20}}>Nome do(a) paciente:</Text>
        <Text style={{fontSize: 20}}>api</Text>
      </View>

      <View style={styles.viewInferior}>
        <Text style={{fontSize: 18, textAlign: 'center'}}>Informações do(a) paciente colatadas pelo dispositivo:</Text>

        <View style={{margin: 30}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>Batimento cardíaco:</Text>
          <Text style={{fontSize: 18, textAlign: 'center', color: '#A7043B', fontWeight: 'bold', margin: 10}}>api</Text>
          <Text style={{fontSize: 18, textAlign: 'center'}}>Temperatura:</Text>
          <Text style={{fontSize: 18, textAlign: 'center', color: '#A7043B', fontWeight: 'bold', margin: 10}}>api</Text>
          <Text style={{fontSize: 18, textAlign: 'center'}}>Umidade:</Text>
          <Text style={{fontSize: 18, textAlign: 'center', color: '#A7043B', fontWeight: 'bold', margin: 10}}>api</Text>
          <Text style={{fontSize: 18, textAlign: 'center'}}>Localização: </Text>
          <Text style={{fontSize: 18, textAlign: 'center', color: '#A7043B', fontWeight: 'bold', margin: 10}}>api</Text>
        </View>
      </View>     
    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  viewSuperior: {
    backgroundColor: 'white',
    borderRadius: 30,
    width: '90%',
    padding: 40, 
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 5,  
      height: 5, 
    },

    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },

  viewInferior: {
    backgroundColor: 'white',
    borderRadius: 30,
    width: '90%',
    padding: 20, 
    marginTop: 13,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 5,  
      height: 5, 
    },

    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },

  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default InfoWatch;
