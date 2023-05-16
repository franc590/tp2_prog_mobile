import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton, Title } from 'react-native-paper';

import FormButton from '../components/formButton';
import FormInput from '../components/formInput';
import Loading from '../components/loading';
import { AuthContext } from '../naviguation/authProvider';

export default function SignupScreen({ navigation }) {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [cell, setCell] = useState('');

  const { register, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading />;
  }

  return (
      <View style={styles.container}>
        <Title style={styles.titleText}>Inscrivez-vous!</Title>
        <FormInput
            labelName='Display Name'
            value={displayName}
            autoCapitalize='none'
            onChangeText={(userDisplayName) => setDisplayName(userDisplayName)}
        />
        <FormInput
            labelName='Email'
            value={email}
            autoCapitalize='none'
            onChangeText={(userEmail) => setEmail(userEmail)}
        />
        <FormInput
            labelName='Password'
            value={password}
            secureTextEntry={true}
            onChangeText={(userPassword) => setPassword(userPassword)}
        />
        <FormInput
            labelName='Confirm password'
            value={password2}
            secureTextEntry={true}
            onChangeText={(userPassword) => setPassword2(userPassword)}
        />
        <FormInput
            labelName='Cellulaire'
            value={cell}
            autoCapitalize='none'
            onChangeText={(cell) => setCell(cell)}
        />

        
        <FormButton
            title='Signup'
            modeValue='contained'
            labelStyle={styles.loginButtonLabel}
            onPress={() => register(displayName, email, password)}
        />
        <IconButton
            icon='keyboard-backspace'
            size={30}
            style={styles.navButton}
            iconColor='#5b3a70'
            onPress={() => navigation.goBack()}
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
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10
  },
  loginButtonLabel: {
    fontSize: 22
  },
  navButtonText: {
    fontSize: 18
  },
  navButton: {
    marginTop: 10
  }
});
