import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const usageOptions = [
  "New / Excellent",
  "Minor wear",
  "Some damage",
  "Significant damage",
  "Unwearable"
];

export default function ProductEntry2Screen({ route, navigation }) {
  const { sentimental } = route.params;

  const handleSelect = (usage) => {
    navigation.navigate('ProductEntry3', {
      sentimental,
      usage,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>What is the garment condition?</Text>

      {usageOptions.map((option) => (
        <PrimaryButton
          key={option}
          title={option}
          onPress={() => handleSelect(option)}
          style={styles.button}
        />
      ))}
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
