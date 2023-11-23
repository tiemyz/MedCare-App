import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Button } from 'react-native';
import axios from 'axios';

const PacienteChatScreen = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const pacienteId = 2; 

    useEffect(() => {
        axios.get(`https://sua-api.com/api/chat/user/${pacienteId}/messages`)
            .then(response => setMessages(response.data));
    }, [pacienteId]);

    const sendMessage = () => {
        axios.post('https://sua-api.com/api/chat/send', {
            userId: pacienteId,
            content: newMessage,
        })
        .then(() => setNewMessage(''))
        .catch(error => console.error('Erro ao enviar mensagem:', error));
    };

    return (
        <View>
            <FlatList
                data={messages}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.content}</Text>
                    </View>
                )}
            />
            <View>
                <TextInput
                    value={newMessage}
                    onChangeText={text => setNewMessage(text)}
                    placeholder="Digite sua mensagem"
                />
                <Button
                    title="Enviar"
                    onPress={sendMessage}
                />
            </View>
        </View>
    );
};

export default PacienteChatScreen;
