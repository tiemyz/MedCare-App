import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FundoPerfil from '../../assets/fundo-perfil.png';
import IconPerfil from '../../assets/icon-perfil.png';

const MedicoPerfil = () => {
  const [medicoDashboard, setMedicoDashboard] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editedMedico, setEditedMedico] = useState({
    nome: '',
    cpfCrm: '',
    dataNascimento: '',
    email: '',
  });

  useEffect(() => {
    fetchMedicoDashboard();
  }, []);

  const fetchMedicoDashboard = async () => {
    try {
      const response = await fetch('http://20.121.229.134:8080/api/usuarios/1');
      const data = await response.json();
      setMedicoDashboard(data);
      setEditedMedico({
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
    setEditedMedico({
      nome: medicoDashboard.nome,
      cpfCrm: medicoDashboard.cpfCrm,
      dataNascimento: medicoDashboard.dataNascimento,
      email: medicoDashboard.email,
    });
    setEditing(false);
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://20.121.229.134:8080/api/usuarios/${medicoDashboard.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        console.log('Usuário excluído com sucesso');
        setMedicoDashboard([]);
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
      const response = await fetch(`http://20.121.229.134:8080/api/usuarios/${medicoDashboard.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedMedico),
      });
  
      if (response.ok) {
        console.log('Usuário atualizado com sucesso');
        setMedicoDashboard(editedMedico);
        setEditing(false);
      } else {
        console.error('Erro ao atualizar usuário');
      }
    } catch (error) {
      console.error('Erro ao atualizar usuário', error);
    }
  };
  
  if (!medicoDashboard) {
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
          <Text style={{ fontSize: 20, marginBottom: 50 }}>Médico (a):</Text>
          {!editing && <Text style={{ fontSize: 20, marginBottom: 21 }}>{medicoDashboard.nome}</Text>}
          {editing && (
            <TextInput
              style={styles.input}
              value={editedMedico.nome}
              onChangeText={(text) => setEditedMedico({ ...editedMedico, nome: text })}
            />
          )}

          <Text style={{ fontSize: 20, marginBottom: 21 }}>CRM:</Text>
          {!editing && <Text style={{ fontSize: 20, marginBottom: 21 }}>{medicoDashboard.cpfCrm}</Text>}
          {editing && (
            <TextInput
              style={styles.input}
              value={editedMedico.cpfCrm}
              onChangeText={(text) => setEditedMedico({ ...editedMedico, cpfCrm: text })}
            />
          )}

          <Text style={{ fontSize: 20 }}>Data de nascimento:</Text>
          {!editing && <Text style={{ fontSize: 20, marginBottom: 21 }}>{medicoDashboard.dataNascimento}</Text>}
          {editing && (
            <TextInput
              style={styles.input}
              value={editedMedico.dataNascimento}
              onChangeText={(text) => setEditedMedico({ ...editedMedico, dataNascimento: text })}
            />
          )}

          <Text style={{ fontSize: 20 }}>Email:</Text>
          {!editing && <Text style={{ fontSize: 20, marginBottom: 24 }}>{medicoDashboard.email}</Text>}
          {editing && (
            <TextInput
              style={styles.input}
              value={editedMedico.email}
              onChangeText={(text) => setEditedMedico({ ...editedMedico, email: text })}
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

export default MedicoPerfil;
