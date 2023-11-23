import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, Image, Alert } from 'react-native';
import authAPI from '../../authAPI';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LoginFundo from '../../assets/login-fundo.png';
import MedcareLogoColor from '../../assets/medcare-logo-color.png';

const api = authAPI();

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert('Campos vazios', 'Por favor, preencha todos os campos antes de entrar.');
      return;
    }

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
    <ImageBackground source={LoginFundo} style={styles.background}>
      <View style={{ width: '90%', alignItems: 'center', marginTop: 150 }}>
        <View>
          <Image source={MedcareLogoColor} style={{ width: 186, height: 72, resizeMode: 'contain' }}></Image>
        </View>

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

        <TouchableOpacity onPress={handleLogin} disabled={loading} style={{ backgroundColor: '#A7043B', width: '30%', alignItems: 'center', borderRadius: 30, padding: 10, margin: 20 }}>
          <View>
            <Text style={styles.buttonText}>{loading ? 'Entrando...' : 'Entrar'}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.cadastroLink}>Não tem conta?</Text>
            <Text style={styles.cadastroLinkColor}>Cadastre-se</Text>
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

  input: {
    height: 55,
    fontSize: 16,
    width: '90%',
    color: '#000',
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginTop: 20,
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

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15
  },

  cadastroLink: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18
  },

  cadastroLinkColor: {
    color: '#CF053F',
    marginLeft: 5,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: 18
  },
});

export default LoginScreen;
