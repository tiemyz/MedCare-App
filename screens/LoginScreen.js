import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';

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
    navigation.navigate('Cadastro');
  };

  return (
    <View>
      <Text>Login Screen</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Senha" secureTextEntry value={senha} onChangeText={setSenha} />
      <Button title="Entrar" onPress={handleLogin} />
      <TouchableOpacity onPress={handleCadastro}>
        <Text style={{ color: 'blue', marginTop: 10 }}>Não tem conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
