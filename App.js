import React from 'react';
import {StyleSheet} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Loginpage from './pages/Loginpage';
import Registrationpage from './pages/Registrationpage';
import Privateofficepage from './pages/Privateofficepage';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Loginpage"
          component={Loginpage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Registrationpage"
          component={Registrationpage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Privateofficepage"
          component={Privateofficepage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor:'#1B2558',
  },
});

export default App;