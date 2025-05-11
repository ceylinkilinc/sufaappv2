import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryButton from '../components/PrimaryButton';

const priceOptions = [
  "Free / gifted",
  "1-1000",
  "1000-3000",
  "3000 TL +"
];

export default function ProductEntry4_5Screen({ route, navigation }) {
  const { sentimental, usage, category, material } = route.params;
  const [selectedPrice, setSelectedPrice] = useState(null);

  const handleContinue = () => {
    if (!selectedPrice) {
      return Alert.alert("Please select a price range");
    }

    navigation.navigate('ProductEntry4_3', {
      sentimental,
      usage,
      category,
      material,
      price: selectedPrice
    });
    
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>How much did this item cost?</Text>

      {priceOptions.map((price) => (
        <TouchableOpacity
          key={price}
          style={[
            styles.option,
            selectedPrice === price && styles.selected
          ]}
          onPress={() => setSelectedPrice(price)}
        >
          <Text style={styles.optionText}>{price}</Text>
        </TouchableOpacity>
      ))}

      <PrimaryButton title="Continue" onPress={handleContinue} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f8ffe6',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#3c4a2a',
    marginBottom: 24,
    textAlign: 'center',
  },
  option: {
    padding: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    backgroundColor: '#fff',
  },
  selected: {
    borderColor: '#3c4a2a',
    backgroundColor: '#d9f9b1',
  },
  optionText: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
  },
});
