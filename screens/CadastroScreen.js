import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import authAPI from '../authAPI';
import CadastroFundo from '../assets/cadastro-fundo-2.png';

const api = authAPI();

const CadastroScreen = ({ route, navigation }) => {
  const { userType } = route.params || {};
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpfCrm, setCpfCrm] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = async () => {
    try {
      const response = await api.cadastrarUsuarioAPI(nome, email, dataNascimento, cpfCrm, senha);

      console.log('Resposta do cadastro:', response);

      navigation.navigate('Login');
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error.message);
    }
  };

  return (
    <ImageBackground source={CadastroFundo} style={styles.background}>
      <View style={{width: '90%', alignItems: 'center', marginTop: 150}}>
        {/*<Text style={styles.title}>Sou {userType}</Text>*/}
        <TextInput style={styles.input} placeholder="Nome completo" value={nome} onChangeText={setNome} />
        <TextInput style={styles.input} placeholder="Email (médicos: @medico.com)" value={email} onChangeText={setEmail} />
        <TextInput style={styles.input} placeholder="Data de nascimento (ex: 28/08/2002)" value={dataNascimento} onChangeText={setDataNascimento} />
        <TextInput style={styles.input} placeholder="CRM (médicos) / CPF (pacientes)" value={cpfCrm} onChangeText={setCpfCrm} />
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry value={senha} onChangeText={setSenha} />
        <TouchableOpacity onPress={handleCadastro}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </View>
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

  title: {
      fontSize: 25,
      color: '#000',
      marginTop: 50,
      fontWeight: 'bold'    
  },

  input: {
    height: 55,
    fontSize: 16,
    width: '90%',
    color: 'gray',
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginTop: 25,
    borderRadius: 30,
    marginBottom: 10,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 5,  
      height: 5, 
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },

  button: {
    backgroundColor: '#A7043B', 
    width: '80%', 
    alignItems: 'center', 
    borderRadius: 30, 
    padding: 10, 
    margin: 20
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15
  },
});

export default CadastroScreen;
