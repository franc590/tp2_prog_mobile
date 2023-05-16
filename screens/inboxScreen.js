import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import firebase from 'firebase';

const InboxScreen = ({ navigation }) => {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    // Récupération des conversations depuis Firebase Realtime Database
    const conversationsRef = firebase.database().ref('conversations');
    conversationsRef.on('value', (snapshot) => {
      const conversationsList = [];
      snapshot.forEach((childSnapshot) => {
        const conversation = childSnapshot.val();
        conversationsList.push({
          key: childSnapshot.key,
          user: conversation.user,
          lastMessage: conversation.lastMessage,
          timestamp: conversation.timestamp,
        });
      });
      setConversations(conversationsList);
    });
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{ padding: 16 }}
      onPress={() => navigation.navigate('Conversation', { conversationId: item.key })}
    >
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.user}</Text>
      <Text style={{ fontSize: 16 }}>{item.lastMessage}</Text>
      <Text style={{ fontSize: 14, color: 'gray' }}>{item.timestamp}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={conversations}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

export default InboxScreen;