import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, TextInput, FlatList, StyleSheet, ImageBackground, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PerfilWatch from '../assets/perfil-watch.png';

const BASE_URL = 'http://localhost:8080/api/chat';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch(`${BASE_URL}/mensagens`);
      const data = await response.json();
      setMessages(data);
      console.log('Mensagens recebidas:', data); // Adicione esta linha
    } catch (error) {
      console.error('Erro ao obter mensagens:', error);
    }
  };
  

  const handleSendMessage = async () => {
    if (inputText.trim() === '') {
      return; // Não envie mensagens vazias
    }

    try {
      const response = await fetch(`${BASE_URL}/enviar`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: inputText,
        }),
      });

      if (response.ok) {
        // Se a mensagem foi enviada com sucesso, atualizamos a lista de mensagens
        await fetchMessages();
        setInputText('');
      } else {
        console.error('Erro ao enviar mensagem:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
    }
  };

  return (
    <ImageBackground
      source={PerfilWatch}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.messageContainer}>
              <Text style={styles.messageText}>{item.text}</Text>
            </View>
          )}
        />

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.inputContainer}
        >
          <TextInput
            style={styles.input}
            placeholder="Digite sua mensagem..."
            value={inputText}
            onChangeText={(text) => setInputText(text)}
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
            <Icon name="send" size={24} color="white" />
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center'
  },

  container: {
    flex: 0.7,
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

  messageContainer: {
    width: '50%',
    padding: 10,
    backgroundColor: '#FD9797',
    borderRadius: 30,
    margin: 8,
  },
  messageText: {
    fontSize: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
  },
  input: {
    fontSize: 20,
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 20,
    paddingHorizontal: 16,
    marginRight: 8,
    backgroundColor: 'white',
  },
  sendButton: {
    backgroundColor: '#A7043B',
    borderRadius: 20,
    padding: 10,
  },
});

export default ChatScreen;



/*import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, TextInput, FlatList, StyleSheet, ImageBackground, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PerfilWatch from '../assets/perfil-watch.png';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    fetchMessagesFromAPI();
  }, []);

  const fetchMessagesFromAPI = async () => {
    try {
      const response = await fetch('http://sua-api.com/mensagens'); // Substitua pela sua URL
      const data = await response.json();
      setMessages(data); 
    } catch (error) {
      console.error('Erro ao obter mensagens da API:', error);
    }
  };

  const handleSendMessage = async () => {
    if (inputText.trim() === '') {
      return; // Não envie mensagens vazias
    }

    try {
      const response = await fetch('http://sua-api.com/enviar-mensagem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText }),
      });

      if (response.ok) {
        console.log('Mensagem enviada com sucesso');
        // Atualizar a lista de mensagens após o envio bem-sucedido
        fetchMessagesFromAPI();
      } else {
        console.error('Erro ao enviar mensagem:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
    }

    setInputText('');
  };

  return (
    <ImageBackground
      source={PerfilWatch}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.messageContainer}>
              <Text style={styles.messageText}>{item.text}</Text>
            </View>
          )}
        />

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.inputContainer}
        >
          <TextInput
            style={styles.input}
            placeholder="Digite sua mensagem..."
            value={inputText}
            onChangeText={(text) => setInputText(text)}
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
            <Icon name="send" size={24} color="white" />
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center'
  },

  container: {
    flex: 0.7,
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

  messageContainer: {
    width: '50%',
    padding: 10,
    backgroundColor: '#FD9797',
    borderRadius: 30,
    margin: 8,
  },
  messageText: {
    fontSize: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
  },
  input: {
    fontSize: 20,
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 20,
    paddingHorizontal: 16,
    marginRight: 8,
    backgroundColor: 'white',
  },
  sendButton: {
    backgroundColor: '#A7043B',
    borderRadius: 20,
    padding: 10,
  },
});


export default ChatScreen;*/
