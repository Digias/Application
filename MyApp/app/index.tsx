import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import SearchScreen from './screens/SearchScreen';

// Creazione dello stack navigator
const Stack = createStackNavigator();

// Barra di navigazione personalizzata con i pulsanti di navigazione
const CustomHeader = ({ navigation }: any) => (
  <View style={styles.header}>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
      <Text style={styles.buttonText}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Search')}>
      <Text style={styles.buttonText}>Cerca</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Settings')}>
      <Text style={styles.buttonText}>Impostazioni</Text>
    </TouchableOpacity>
  </View>
);

// Configurazione principale della navigazione
const App = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        // Utilizziamo un header personalizzato per la navigazione
        header: () => <CustomHeader navigation={navigation} />,
        headerShown: true, // Mostra l'header
        gestureEnabled: true, // Abilita la navigazione gestuale
        ...Platform.select({
          android: {
            headerShown: true,
          },
          ios: {
            headerShown: true,
          },
        }),
      })}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

// Stili dell'app
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row', // Disposizione orizzontale dei pulsanti
    justifyContent: 'space-around', // Distribuzione uniforme
    alignItems: 'center', // Allineamento verticale
    height: 100,
    paddingTop: 50,
    backgroundColor: '#6200ea', // Colore dello sfondo
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: '#fff', // Testo bianco per contrastare lo sfondo viola
    fontSize: 16,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default App;
