import React from 'react';
import { View, TouchableOpacity, Text, ImageBackground, StyleSheet, Image } from 'react-native';
import LoginFundo from '../assets/login-fundo.png';
import MedcareLogoColor from '../assets/medcare-logo-color.png';

const HomeScreen = ({ route, navigation }) => {
  
  console.log(route.params); 
  
  const { setUserType } = route.params || {};

  const handleSelecionarTipoUsuario = (tipoUsuario) => {
    if (setUserType) {
      setUserType(tipoUsuario);
      navigation.navigate('Cadastro', { userType: tipoUsuario });
    } else {
      console.error('Função setUserType não definida nos parâmetros do route.');
    }
  };

  return (
    <ImageBackground source={LoginFundo} style={styles.background}>
        
      <View style={{width: '90%', alignItems: 'center', marginTop: 120}}>

        <View>
            <Image source={MedcareLogoColor} style={{width: 186, height: 72, resizeMode: 'contain', marginBottom: 60}}></Image>
        </View>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#CF053F' }]}
          onPress={() => handleSelecionarTipoUsuario('medico')}
        >
          <Text style={styles.buttonText}>Sou médico</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'white' }]}
          onPress={() => handleSelecionarTipoUsuario('paciente')}
        >
          <Text style={[styles.buttonText, { color: 'black' }]}>Sou paciente</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center'
  },

  button: {
    width: '90%',
    marginBottom: 20,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,  
      height: 5, 
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },

  buttonText: {
    color: '#000',
    fontSize: 25,
  },
});

export default HomeScreen;
