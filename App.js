import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import CadastroScreen from './screens/CadastroScreen';
import MedicoDashboard from './screens/MedicoDashboard';
import PacienteDashboard from './screens/PacienteDashboard';
import HomeScreen from './screens/HomeScreen';
import InfoWatch from './screens/InfoWatch';
import MedicoPerfil from './screens/MedicoPerfil';
import PacientePerfil from './screens/PacientePerfil';
import ChatScreen from './screens/ChatScreen';

const Stack = createStackNavigator();

const App = () => {
  const [userType, setUserType] = useState();

  useEffect(() => {
    console.log('userType:', userType);
  }, [userType]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen
          name="MedicoDashboard"
          component={MedicoDashboard}
        />
        <Stack.Screen
          name="PacienteDashboard"
          component={PacienteDashboard}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{ setUserType: setUserType }}
        />
        <Stack.Screen
          name="InfoWatch"
          component={InfoWatch}
        />
        <Stack.Screen
          name="MedicoPerfil"
          component={MedicoPerfil}
        />

        <Stack.Screen
          name="PacientePerfil"
          component={PacientePerfil}
        />
        
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
