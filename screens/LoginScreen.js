import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import authAPI from '../authAPI';

const api = authAPI();

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true); 

      const loginResponse = await api.realizarLoginAPI(email, senha);
      console.log('Resposta do login:', loginResponse); 

      if (loginResponse.token) {
        console.log('Login bem-sucedido. Redirecionando...');

        const tipoUsuario = email.includes('@medico.com') ? 'medico' : 'paciente';

        if (tipoUsuario === 'medico') {
          console.log('Usuário é um médico. Redirecionando para MedicoDashboard.');
          navigation.navigate('MedicoDashboard');
        } else {
          console.log('Usuário é um paciente. Redirecionando para PacienteDashboard.');
          navigation.navigate('PacienteDashboard');
        }
      } else {
        console.error('Erro ao fazer login:', loginResponse.message);
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error.message);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/banner.png')} style={styles.banner}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
        <TouchableOpacity onPress={handleLogin} disabled={loading}>
          <View>
            <Text style={styles.buttonText}>{loading ? 'Entrando...' : 'Entrar'}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
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
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
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
  buttonText: {
    color: 'blue',
    marginTop: 10,
  },
  cadastroLink: {
    color: 'blue',
    marginTop: 10,
  },
});

export default LoginScreen;
