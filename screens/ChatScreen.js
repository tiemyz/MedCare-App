import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, FlatList, StyleSheet, ImageBackground, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PerfilWatch from '../assets/perfil-watch.png';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = () => {
    if (inputText.trim() === '') {
      return; // Não envie mensagens vazias
    }

    const newMessages = [...messages, { text: inputText, id: messages.length }];
    setMessages(newMessages);
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

export default ChatScreen;
