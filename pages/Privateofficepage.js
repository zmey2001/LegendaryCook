import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, TextInput, View} from 'react-native';

const Privateofficepage = ({ navigation }) => {
  const [Search, setSearch] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        HELLO, NICKNAME
      </Text>
      <TextInput
        style={styles.input}
        name="Search"
        onChangeText={setSearch}
        value={Search}
        placeholder="SEARCH"
      />
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.buttonFat} onPress={() => navigation.navigate('Loginpage')}>
          <Text style={styles.textTouch}>ИЗБРАННОЕ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonFat} onPress={() => navigation.navigate('Loginpage')}>
          <Text style={styles.textTouch}>ПРЕДЛОЖИТЬ</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.newbutton}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Loginpage')}>
          <Text style={styles.textTouch}>EXIT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textTouch: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
  buttonFat:{
    backgroundColor: '#839EC9',
    padding: 35,
    margin: 5,
    borderRadius: 20,
  },
  buttons: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  newbutton: {
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor:'#1B2558',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#839EC9',
    padding: 10,
    borderRadius: 20,
  },
  input: {
    width:"99%",
    backgroundColor:'#D9D9D9',
    height: 40,
    margin: 12,
    padding: 10,
    borderRadius: 20,
    position: 'absolute',
    top: 40,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 60,
  },
  SimpeText: {
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: 10,
  },
});

export default Privateofficepage;