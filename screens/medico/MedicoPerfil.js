import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FundoPerfil from '../../assets/fundo-perfil.png';
import IconPerfil from '../../assets/icon-perfil.png';

const MedicoPerfil = () => {

  const [medicoDashboard, setMedicoDashboard] = useState([]);

  useEffect(() => {
    fetchMedicoDashboard();
  }, []);

  const fetchMedicoDashboard = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/usuarios/1'); 
      const data = await response.json();
      setMedicoDashboard(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!medicoDashboard) {
    return <Text>Carregando informações...</Text>;
  }

  return (
    <ImageBackground source={FundoPerfil} style={styles.background}>
      <View style={styles.viewPrincipal}>

        <View style={{flexDirection: 'row', justifyContent: 'flex-end', paddingHorizontal: 20, marginTop: 21}}>
          <TouchableOpacity>
            <Icon name="edit" size={30} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Icon name="delete" size={30} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={{alignItems: 'center', marginBottom: 25}}>
          <Image source={IconPerfil} style={{ width: 70, height: 70, resizeMode: 'contain' }}></Image>
        </View>

        <View style={{alignItems: 'center', width: '100%'}}>
          <Text style={{fontSize: 20, marginBottom: 50}}>Médico (a):</Text>

          <Text style={{fontSize: 20, marginBottom: 21}}>{medicoDashboard.nome}</Text>

          <Text style={{fontSize: 20, marginBottom: 21}}>CRM: {medicoDashboard.cpfCrm}</Text>
          <Text style={{fontSize: 20}}>Data de nascimento: </Text>
          <Text style={{fontSize: 20, marginBottom: 21}}>{medicoDashboard.dataNascimento}</Text>
          <Text style={{fontSize: 20}}>Email: </Text>
          <Text style={{fontSize: 20, marginBottom: 24}}>{medicoDashboard.email}</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  viewPrincipal: {
    backgroundColor: 'white',
    borderRadius: 30,
    width: '90%',
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

export default MedicoPerfil;
