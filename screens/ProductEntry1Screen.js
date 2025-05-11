import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

export default function ProductEntry1Screen({ navigation }) {
  const handleSelect = (sentimentalValue) => {
    navigation.navigate('ProductEntry2', { sentimental: sentimentalValue });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>What is the emotional value of this item?</Text>

      <PrimaryButton
        title="Deeply meaningful (gift, memory)"
        onPress={() => handleSelect("Deeply meaningful")}
        style={styles.button}
      />
      <PrimaryButton
        title="Moderate emotional value"
        onPress={() => handleSelect("Moderate emotional value")}
        style={styles.button}
      />
      <PrimaryButton
        title="Slight attachment"
        onPress={() => handleSelect("Slight attachment")}
        style={styles.button}
      />
      <PrimaryButton
        title="No sentiment"
        onPress={() => handleSelect("No sentiment")}
        style={styles.button}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8ffe6',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#3c4a2a',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    marginBottom: 16,
  },
});
