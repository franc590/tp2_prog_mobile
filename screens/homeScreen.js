import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import FormButton from '../components/formButton';
import { AuthContext } from '../naviguation/authProvider';

export default function HomeScreen() {
  const { logout } = useContext(AuthContext);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Title>ChatBot</Title>
      <FormButton
        modeValue='contained'
        title='Logout'
        onPress={() => { 
          logout()
          navigation.navigate("Login")
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});