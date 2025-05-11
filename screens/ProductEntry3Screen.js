import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

export default function ProductEntry3Screen({ route, navigation }) {
  const { sentimental, usage } = route.params;

  const handleSelect = (category) => {
    navigation.navigate('ProductEntry4', {
      sentimental,
      usage,
      category,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>What is the product category?</Text>

      <PrimaryButton
        title="Tops / Dresses"
        onPress={() => handleSelect('tops_dresses')}
        style={styles.button}
      />
      <PrimaryButton
        title="Bottoms"
        onPress={() => handleSelect('bottoms')}
        style={styles.button}
      />
      <PrimaryButton
        title="Under Garments"
        onPress={() => handleSelect('undergarments')}
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
