import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

const App = () => {
  const handleButtonPress = (buttonName: string) => {
    console.log(`${buttonName} premuto`);
  };

  return (
    <View style={styles.container}>
      {/* StatusBar - Impostiamo il colore della StatusBar */}
      <StatusBar barStyle="light-content" backgroundColor="#6200ea" />
      
      {/* Barra superiore */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Home')}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Cerca')}>
          <Text style={styles.buttonText}>Cerca</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Impostazioni')}>
          <Text style={styles.buttonText}>Impostazioni</Text>
        </TouchableOpacity>
      </View>

      {/* Contenuto principale */}
      <View style={styles.content}>
        <Text>Contenuto principale dell'app</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    paddingTop: 20, // Aggiungiamo spazio sopra la barra per evitare la sovrapposizione con la StatusBar
    backgroundColor: '#6200ea',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: '#fff',
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
