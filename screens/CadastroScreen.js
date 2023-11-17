import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

const CadastroScreen = ({ route, navigation }) => {
  const { userType } = route.params || {};
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [crmOuCpf, setCrmOuCpf] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = async () => {
    // Implementar lógica de cadastro aqui
    // Exemplo: validar campos, chamar API, etc.

    // Supondo que você tenha uma função de cadastro assíncrona
    try {
      // Chamar a função de cadastro aqui
      // await api.cadastrarUsuario({ nome, email, dataNascimento, crmOuCpf, senha });

      // Redirecionar para a tela de login após o cadastro
      navigation.navigate('Login');
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      // Tratar erros de cadastro, exibir mensagem, etc.
    }
  };

  return (
    <ImageBackground source={require('../assets/banner.png')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Cadastro Screen ({userType})</Text>
        <TextInput style={styles.input} placeholder="Nome completo" value={nome} onChangeText={setNome} />
        <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
        <TextInput style={styles.input} placeholder="Data de Nascimento (ex: DD/MM/)" value={dataNascimento} onChangeText={setDataNascimento} />
        <TextInput style={styles.input} placeholder={userType === 'medico' ? 'CRM' : 'CPF'} value={crmOuCpf} onChangeText={setCrmOuCpf} />
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry value={senha} onChangeText={setSenha} />
        <TouchableOpacity style={styles.buttonContainer} onPress={handleCadastro}>
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
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    color: 'white',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  buttonContainer: {
    width: '80%',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CadastroScreen;
