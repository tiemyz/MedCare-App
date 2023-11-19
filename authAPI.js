import axios from 'axios';

const authAPI = () => {
  const api = axios.create({
    baseURL: "http://localhost:8080" 
  });

  const cadastrarUsuarioAPI = async (nome, email, senha) => {
    try {
      const tipoUsuario = email.includes('@medico.com') ? 'medico' : 'paciente';
      const response = await api.post('/api/registrar', {
        nome,
        email,
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
      const response = await api.post('/api/login', {
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
