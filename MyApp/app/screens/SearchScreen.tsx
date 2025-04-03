import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SearchScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Assicura che il contenitore occupi tutta la schermata
    justifyContent: 'center', // Centra il contenuto verticalmente
    alignItems: 'center', // Centra il contenuto orizzontalmente
    backgroundColor: '#fff', // Colore di sfondo (opzionale)
  },
  text: {
    fontSize: 50, // Grandezza del testo
    textAlign: 'center', // Centra il testo
    color: '#000', // Colore del testo
  },
});

export default SearchScreen;