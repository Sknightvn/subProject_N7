import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen01 from './screens/Screen01';
// import Screen02 from './screens/Screen02';
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="">
        <Stack.Screen name="Screen01" component={Screen01} />
        {/* <Stack.Screen name="Screen02" component={Screen02} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
