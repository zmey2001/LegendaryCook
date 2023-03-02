import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';

const Registrationpage = ({ navigation }) => {
  const [Firstname, setFirstname] = React.useState('');
  const [Lastname, setLastname] = React.useState('');  
  const [Email, setEmail] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const [Password2, setPassword2] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        REGISTRATION
      </Text>
      <Text style={styles.SimpeText}>
        FIRSTNAME
      </Text>
      <TextInput
        style={styles.input}
        name="Firstname"
        onChangeText={setFirstname}
        value={Firstname}
        placeholder="FIRSTNAME"
      />
      <Text style={styles.SimpeText}>
        LASTNAME
      </Text>
      <TextInput
        style={styles.input}
        name="Lastname"
        onChangeText={setLastname}
        value={Lastname}
        placeholder="LASTNAME"
      />
      <Text style={styles.SimpeText}>
        EMAIL
      </Text>
      <TextInput
        style={styles.input}
        name="Email"
        onChangeText={setEmail}
        value={Email}
        placeholder="EMAIL"
      />
      <Text style={styles.SimpeText}>
        PASSWORD
      </Text>
      <TextInput
        style={styles.input}
        name="Password"
        onChangeText={setPassword}
        value={Password}
        secureTextEntry={true}
        placeholder="PASSWORD"
      />
      <Text style={styles.SimpeText}>
        PASSWORD AGAIN
      </Text>
      <TextInput
        style={styles.input}
        name="Password2"
        onChangeText={setPassword2}
        value={Password2}
        secureTextEntry={true}
        placeholder="PASSWORD AGAIN"
      />
      <View style={styles.newbutton}>
      <Button
        color="#839EC9"
        title="REGISTRATION"
      />
      </View>
      <View style={styles.newbutton}>
      <Button
        color="#839EC9"
        title="BACK"
        onPress={() => navigation.navigate('Loginpage')}
      />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    fontFamily: 'Inter',
    backgroundColor:'#1B2558',
  },
  input: {
    flexDirection: 'row',
    backgroundColor:'#D9D9D9',
    height: 40,
    margin: 12,
    padding: 10,
  },
  newbutton: {
    padding: 10,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 15,
    textShadowColor: 'rgba(0, 0, 0, 2)',
    textShadowOffset: {width: -2, height: 2},
    textShadowRadius: 5
  },
  SimpeText: {
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: 10,
    textShadowColor: 'rgba(0, 0, 0, 2)',
    textShadowOffset: {width: -2, height: 2},
    textShadowRadius: 5
  },
  
});

export default Registrationpage;