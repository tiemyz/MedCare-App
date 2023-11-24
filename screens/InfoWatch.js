import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PerfilWatch from '../assets/perfil-watch.png';
import IconPerfil from '../assets/icon-perfil.png';

const InfoWatch = () => {
  const [infoWatch, setInfoWatch] = useState([]);
  const [pacienteDashboard, setPacienteDashboard] = useState(null);

  useEffect(() => {
    fetchInfoWatch();
    fetchPacienteDashboard();
  }, []);

  const fetchInfoWatch = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/infos/1');
      const data = await response.json();
      setInfoWatch(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPacienteDashboard = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/usuarios/2');
      const data = await response.json();
      setPacienteDashboard(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!infoWatch || !pacienteDashboard) {
    return <Text>Carregando informações...</Text>;
  }
  
  return (
    <ImageBackground source={PerfilWatch} style={styles.background}>

      <View style={styles.viewSuperior}>
        <Image source={IconPerfil} style={{ width: 70, height: 70, resizeMode: 'contain'}}></Image>
        <Text style={{fontSize: 20, marginTop: 20}}>Nome do(a) paciente:</Text>
        <Text style={{fontSize: 20}}>{pacienteDashboard.nome}</Text>
      </View>

      <View style={styles.viewInferior}>
        <Text style={{fontSize: 18, textAlign: 'center'}}>Informações do(a) paciente colatadas pelo dispositivo:</Text>

        <View style={{margin: 30}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>Batimento cardíaco:</Text>
          <Text style={{fontSize: 18, textAlign: 'center', color: '#A7043B', fontWeight: 'bold', margin: 10}}>{infoWatch.batimento}</Text>
          <Text style={{fontSize: 18, textAlign: 'center'}}>Temperatura:</Text>
          <Text style={{fontSize: 18, textAlign: 'center', color: '#A7043B', fontWeight: 'bold', margin: 10}}>{infoWatch.temp}</Text>
          <Text style={{fontSize: 18, textAlign: 'center'}}>Umidade:</Text>
          <Text style={{fontSize: 18, textAlign: 'center', color: '#A7043B', fontWeight: 'bold', margin: 10}}>{infoWatch.humidade}</Text>
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
