import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CategoryScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select the category of the item</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Material')}>
        <Text style={styles.buttonText}>Tops / Dresses</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Material')}>
        <Text style={styles.buttonText}>Bottoms</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Material')}>
        <Text style={styles.buttonText}>Under Garments</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8ffe6', padding: 24 },
  title: { fontSize: 22, fontWeight: '700', color: '#3c4a2a', marginBottom: 32, textAlign: 'center' },
  button: {
    backgroundColor: '#a6d86b',
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: { color: '#3c4a2a', fontSize: 16, fontWeight: '600' },
});
