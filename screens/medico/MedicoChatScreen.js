import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Button } from 'react-native';
import axios from 'axios';

const MedicoChatScreen = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const medicoId = 1; 

    useEffect(() => {
        axios.get(`https://localhost:8080/api/chat/user/${medicoId}/messages`)
            .then(response => setMessages(response.data));
    }, [medicoId]);

    const sendMessage = () => {
        axios.post('https://localhost:8080/api/chat/send', {
            userId: medicoId,
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

export default MedicoChatScreen;
