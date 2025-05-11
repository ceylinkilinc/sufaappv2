import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const categories = [
  "Tops / Dresses",
  "Bottoms",
  "Under Garments"
];

export default function ProductEntry3Screen({ route, navigation }) {
  const { sentimental, usage } = route.params;
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleNext = () => {
    if (!selectedCategory) {
      Alert.alert("Please select a category");
      return;
    }

    navigation.navigate('ProductEntry4', {
      sentimental,
      usage,
      category: selectedCategory
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>What is the product category?</Text>

      {categories.map((cat) => (
        <TouchableOpacity
          key={cat}
          style={[
            styles.option,
            selectedCategory === cat && styles.selected
          ]}
          onPress={() => setSelectedCategory(cat)}
        >
          <Text
            style={[
              styles.optionText,
              selectedCategory === cat && styles.selectedText
            ]}
          >
            {cat}
          </Text>
        </TouchableOpacity>
      ))}

      <PrimaryButton title="Next" onPress={handleNext} />
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
    marginBottom: 24,
    textAlign: 'center',
  },
  option: {
    padding: 16,
    marginVertical: 8,
    borderRadius: 12,
    backgroundColor: '#b6e158',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    borderWidth: 2,
    borderColor: '#3c4a2a',
  },
  optionText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#3c4a2a',
  },
  selectedText: {
    color: '#3c4a2a'
  }
});
