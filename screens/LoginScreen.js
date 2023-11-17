import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, ImageBackground, Image, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    // Implementar lógica de login aqui
    // Exemplo: validar campos, chamar API, etc.

    // Supondo que você tenha uma função de login assíncrona
    try {
      // Chamar a função de login aqui
      // await api.realizarLogin({ email, senha });

      // Redirecionar para a tela apropriada após o login
      // Você deve ter alguma lógica aqui para determinar se o usuário é médico ou paciente
      // Exemplo: se o email contiver "@medico.com", então é um médico
      if (email.includes('@medico.com')) {
        navigation.navigate('MedicoDashboard');
      } else {
        navigation.navigate('PacienteDashboard');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      // Tratar erros de login, exibir mensagem, etc.
    }
  };

  const handleCadastro = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/banner.png')} style={styles.banner}>
        {/* Logo */}
        <Image source={require('../assets/logo.png')} style={styles.logo} />

        {/* Conteúdo do banner */}
        <Text style={styles.title}>Login Screen</Text>
        <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry value={senha} onChangeText={setSenha} />
        <Button title="Entrar" onPress={handleLogin} />
        <TouchableOpacity onPress={handleCadastro}>
          <Text style={styles.cadastroLink}>Não tem conta? Cadastre-se</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    width: '100%',
    height: '100%', // Alterado para cobrir toda a tela
    resizeMode: 'cover',
    justifyContent: 'center', // Alinha os elementos no centro
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    color: 'white', // Adicionado para melhorar a legibilidade no banner
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: 'white', // Adicionado para melhorar a legibilidade no banner
  },
  cadastroLink: {
    color: 'blue',
    marginTop: 10,
  },
});

export default LoginScreen;
