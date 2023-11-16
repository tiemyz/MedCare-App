import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const CadastroScreen = ({ route, navigation }) => {
  // Certifique-se de que route.params está definido antes de desestruturar
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
    <View>
      <Text>Cadastro Screen ({userType})</Text>
      <TextInput placeholder="Nome completo" value={nome} onChangeText={setNome} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Data de Nascimento (ex: DD/MM/YYYY)" value={dataNascimento} onChangeText={setDataNascimento}/>
      <TextInput placeholder={userType === 'medico' ? 'CRM' : 'CPF'} value={crmOuCpf} onChangeText={setCrmOuCpf}/>
      <TextInput placeholder="Senha" secureTextEntry value={senha} onChangeText={setSenha} />
      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
};

export default CadastroScreen;
