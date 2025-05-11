import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const options = [
  "New / Excellent",
  "Minor wear",
  "Some damage",
  "Significant damage",
  "Unwearable"
];

export default function ProductEntry2Screen({ route, navigation }) {
  const { sentimental } = route.params;
  const [selectedUsage, setSelectedUsage] = useState(null);

  const handleNext = () => {
    if (!selectedUsage) {
      Alert.alert("Please select an option");
      return;
    }

    navigation.navigate('ProductEntry3', {
      sentimental,
      usage: selectedUsage
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>What is the garment's condition?</Text>

      {options.map((opt) => (
        <TouchableOpacity
          key={opt}
          style={[
            styles.option,
            selectedUsage === opt && styles.selected
          ]}
          onPress={() => setSelectedUsage(opt)}
        >
          <Text
            style={[
              styles.optionText,
              selectedUsage === opt && styles.selectedText
            ]}
          >
            {opt}
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
