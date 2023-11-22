import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FundoPerfil from '../../assets/fundo-perfil.png';
import IconPerfil from '../../assets/icon-perfil.png';

const PacientePerfil = () => {
  const [editing, setEditing] = useState(false);
  const [editedPaciente, setEditedPaciente] = useState({});
  const [pacienteDashboard, setPacienteDashboard] = useState(null);

  useEffect(() => {
    fetchPacienteDashboard();
  }, []);

  const fetchPacienteDashboard = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/usuarios/2');
      const data = await response.json();
      setPacienteDashboard(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/usuarios/${pacienteDashboard.id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Paciente excluído com sucesso');
        // Redirecionar ou realizar outra ação necessária após exclusão
      } else {
        console.log('Erro ao excluir paciente');
      }
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/usuarios/${pacienteDashboard.id}`, {
        method: 'PUT', // ou 'PATCH' dependendo da sua lógica de atualização
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedPaciente),
      });

      if (response.ok) {
        console.log('Paciente atualizado com sucesso');
        setEditing(false);
        fetchPacienteDashboard();
      } else {
        console.log('Erro ao atualizar paciente');
      }
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <ImageBackground source={FundoPerfil} style={styles.background}>
      <View style={styles.viewPrincipal}>

        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingHorizontal: 20, marginTop: 21 }}>
          {!editing ? (
            <TouchableOpacity onPress={() => setEditing(true)}>
              <Icon name="edit" size={30} color="#000" />
            </TouchableOpacity>
          ) : (
            <>
              <TouchableOpacity onPress={handleSave}>
                <Icon name="save" size={30} color="#000" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setEditing(false)}>
                <Icon name="cancel" size={30} color="#000" />
              </TouchableOpacity>
            </>
          )}
        </View>

        <View style={{ alignItems: 'center', marginBottom: 25 }}>
          <Image source={IconPerfil} style={{ width: 70, height: 70, resizeMode: 'contain' }} />
        </View>

        <View style={{ alignItems: 'center', width: '100%' }}>
          <Text style={{ fontSize: 20, marginBottom: 50 }}>Paciente:</Text>

          {editing ? (
            <>
              <Text style={{ fontSize: 20, marginBottom: 21 }}>Nome do paciente:</Text>
              <Text style={{ fontSize: 20, marginBottom: 21 }}>CPF:</Text>
              <Text style={{ fontSize: 20, marginBottom: 21 }}>Data de nascimento:</Text>
              <Text style={{ fontSize: 20, marginBottom: 21 }}>Email:</Text>
            </>
          ) : (
            <>
              <Text style={{ fontSize: 20, marginBottom: 21 }}>{pacienteDashboard.nome}</Text>
              <Text style={{ fontSize: 20, marginBottom: 21 }}>CPF: {pacienteDashboard.cpfCrm}</Text>
              <Text style={{ fontSize: 20, marginBottom: 21 }}>Data de nascimento: {pacienteDashboard.dataNascimento}</Text>
              <Text style={{ fontSize: 20, marginBottom: 21 }}>Email: {pacienteDashboard.email}</Text>
            </>
          )}
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
    height: '55%',
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

export default PacientePerfil;
