import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FundoPerfil from '../../assets/fundo-perfil.png';
import IconPerfil from '../../assets/icon-perfil.png';

const PacientePerfil = () => {
  const [pacienteDashboard, setPacienteDashboard] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editedPaciente, setEditedPaciente] = useState({
    nome: '',
    cpfCrm: '',
    dataNascimento: '',
    email: '',
  });

  useEffect(() => {
    fetchPacienteDashboard();
  }, []);

  const fetchPacienteDashboard = async () => {
    try {
      const response = await fetch('http://20.121.229.134:8080/api/usuarios/2');
      const data = await response.json();
      setPacienteDashboard(data);
      setEditedPaciente({
        nome: data.nome,
        cpfCrm: data.cpfCrm,
        dataNascimento: data.dataNascimento,
        email: data.email,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancel = () => {
    setEditedPaciente({
      nome: pacienteDashboard.nome,
      cpfCrm: pacienteDashboard.cpfCrm,
      dataNascimento: pacienteDashboard.dataNascimento,
      email: pacienteDashboard.email,
    });
    setEditing(false);
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://20.121.229.134:8080/api/usuarios/${pacienteDashboard.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        console.log('Usuário excluído com sucesso');
        setPacienteDashboard([]);
      } else {
        console.error('Erro ao excluir usuário:', response.status, response.statusText);
        const errorData = await response.json();
        console.error('Detalhes do erro:', errorData);
      }
    } catch (error) {
      console.error('Erro ao excluir usuário', error);
    }
  };
  
  const handleSave = async () => {
    try {
      const response = await fetch(`http://20.121.229.134:8080/api/usuarios/${pacienteDashboard.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedPaciente),
      });
  
      if (response.ok) {
        console.log('Usuário atualizado com sucesso');
        setPacienteDashboard(editedPaciente);
        setEditing(false);
      } else {
        console.error('Erro ao atualizar usuário');
      }
    } catch (error) {
      console.error('Erro ao atualizar usuário', error);
    }
  };
  
  if (!pacienteDashboard) {
    return <Text>Carregando informações...</Text>;
  }

  return (
    <ImageBackground source={FundoPerfil} style={styles.background}>
      <View style={styles.viewPrincipal}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingHorizontal: 20, marginTop: 21 }}>
          {!editing && (
            <TouchableOpacity onPress={handleEdit}>
              <Icon name="edit" size={30} color="#000" />
            </TouchableOpacity>
          )}
          {editing && (
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={handleSave}>
                <Icon name="save" size={30} color="#000" />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleCancel} style={{ marginLeft: 10 }}>
                <Icon name="cancel" size={30} color="#000" />
              </TouchableOpacity>
            </View>
          )}
          <TouchableOpacity onPress={handleDelete}>
            <Icon name="delete" size={30} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: 'center', marginBottom: 25 }}>
          <Image source={IconPerfil} style={{ width: 70, height: 70, resizeMode: 'contain' }} />
        </View>

        <View style={{ alignItems: 'center', width: '100%' }}>
          <Text style={{ fontSize: 20, marginBottom: 50 }}>Paciente:</Text>
          {!editing && <Text style={{ fontSize: 20, marginBottom: 21 }}>{pacienteDashboard.nome}</Text>}
          {editing && (
            <TextInput
              style={styles.input}
              value={editedPaciente.nome}
              onChangeText={(text) => setEditedPaciente({ ...editedPaciente, nome: text })}
            />
          )}

          <Text style={{ fontSize: 20, marginBottom: 21 }}>CPF:</Text>
          {!editing && <Text style={{ fontSize: 20, marginBottom: 21 }}>{pacienteDashboard.cpfCrm}</Text>}
          {editing && (
            <TextInput
              style={styles.input}
              value={editedPaciente.cpfCrm}
              onChangeText={(text) => setEditedPaciente({ ...editedPaciente, cpfCrm: text })}
            />
          )}

          <Text style={{ fontSize: 20 }}>Data de nascimento:</Text>
          {!editing && <Text style={{ fontSize: 20, marginBottom: 21 }}>{pacienteDashboard.dataNascimento}</Text>}
          {editing && (
            <TextInput
              style={styles.input}
              value={editedPaciente.dataNascimento}
              onChangeText={(text) => setEditedPaciente({ ...editedPaciente, dataNascimento: text })}
            />
          )}

          <Text style={{ fontSize: 20 }}>Email:</Text>
          {!editing && <Text style={{ fontSize: 20, marginBottom: 24 }}>{pacienteDashboard.email}</Text>}
          {editing && (
            <TextInput
              style={styles.input}
              value={editedPaciente.email}
              onChangeText={(text) => setEditedPaciente({ ...editedPaciente, email: text })}
            />
          )}
        </View>
      </View>
    </ImageBackground>
  );
};

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

  input: {
    fontSize: 20,
    marginBottom: 16,
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    width: '80%',
  },
});

export default PacientePerfil;
