import React from 'react';
import { View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button title="Sou Médico" onPress={() => navigation.navigate('Cadastro', { userType: 'medico' })} />
      <Button title="Sou Paciente" onPress={() => navigation.navigate('Cadastro', { userType: 'paciente' })} />
    </View>
  );
};

export default HomeScreen;
