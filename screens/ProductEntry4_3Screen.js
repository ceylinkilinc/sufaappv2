import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const infrastructureOptions = [
  "Recycling bin nearby",
  "Textile bin in neighborhood",
  "Needs transport or shipping",
  "No known recycling options"
];

export default function ProductEntry4_3Screen({ route, navigation }) {
  const { sentimental, usage, category, material, price } = route.params; // ✅ price eklendi
  const [infrastructure, setInfrastructure] = useState(null);

  const handleNext = () => {
    if (!infrastructure) {
      Alert.alert("Please select an infrastructure option.");
      return;
    }

    navigation.navigate("ProductEntry5", {
      sentimental,
      usage,
      category,
      material,
      price,           // ✅ price gönderiliyor
      infrastructure
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>What kind of recycling infrastructure is available?</Text>

      <View style={styles.optionsWrapper}>
        {infrastructureOptions.map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.optionButton,
              infrastructure === option && styles.selectedButton
            ]}
            onPress={() => setInfrastructure(option)}
          >
            <Text
              style={[
                styles.optionText,
                infrastructure === option && styles.selectedText
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <PrimaryButton title="Next" onPress={handleNext} style={{ marginTop: 32 }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8ffe6', padding: 24 },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#3c4a2a',
    marginBottom: 24,
    textAlign: 'center',
  },
  optionsWrapper: {
    gap: 12,
  },
  optionButton: {
    backgroundColor: '#b6e158',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  selectedButton: {
    borderWidth: 2,
    borderColor: '#3c4a2a',
  },
  optionText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#3c4a2a',
  },
  selectedText: {
    color: '#3c4a2a',
  },
});
