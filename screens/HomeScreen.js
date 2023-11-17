import React from 'react';
import { View, TouchableOpacity, Text, ImageBackground, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('../assets/banner.png')} style={styles.background}>
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'red' }]}
          onPress={() => navigation.navigate('Cadastro', { userType: 'medico' })}
        >
          <Text style={styles.buttonText}>Sou Médico</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'white' }]}
          onPress={() => navigation.navigate('Cadastro', { userType: 'paciente' })}
        >
          <Text style={[styles.buttonText, { color: 'black' }]}>Sou Paciente</Text>
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
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 200,
    height: 50,
    marginBottom: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
