import { StatusBar } from 'expo-status-bar';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './src/types/Common';
import Login from './src/screens/auth/login/Login';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <StatusBar animated={true} backgroundColor="#fff" style="auto" />
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: true,
          }}
        >
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Login"
            component={Login}
          />

          <Stack.Screen
            options={{
              headerShown: false, // Hide the header for BottomTabNavigator
            }}
            name="BottomTabNavigator"
            component={BottomTabNavigator}
          />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}
