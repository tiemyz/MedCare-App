import axios from 'axios';

const authAPI = () => {
  const api = axios.create({
    baseURL: "http://medcare-veetor-systems-api.azurewebsites.net" 
  });

  const cadastrarUsuarioAPI = async (nome, email, dataNascimento, cpfCrm, senha) => {
    try {
      const tipoUsuario = email.includes('@medico.com') ? 'medico' : 'paciente';
      const response = await api.post('/api/usuarios/registrar', {
        nome,
        email,
        dataNascimento,
        cpfCrm,
        senha,
        tipoUsuario,
      });

      return response.data;
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      throw error;
    }
  };

  const realizarLoginAPI = async (email, senha) => {
    try {
      const response = await api.post('/api/usuarios/login', {
        email,
        senha,
      });

      return response.data;
    } catch (error) {
      console.error('Erro ao realizar o login:', error.response ? error.response.data : error.message);
      throw error;
    }
  };

  return {
    cadastrarUsuarioAPI,
    realizarLoginAPI,
  };
};

export default authAPI;
