import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const sentiments = [
  "Deeply meaningful",
  "Moderate emotional value",
  "Slight attachment",
  "No sentiment"
];

export default function ProductEntry1Screen({ navigation }) {
  const [selectedSentiment, setSelectedSentiment] = useState(null);

  const handleNext = () => {
    if (!selectedSentiment) {
      Alert.alert("Please select a sentiment level");
      return;
    }

    navigation.navigate('ProductEntry2', { sentimental: selectedSentiment });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Does this item have sentimental value?</Text>

      {sentiments.map((sent) => (
        <TouchableOpacity
          key={sent}
          style={[
            styles.option,
            selectedSentiment === sent && styles.selected
          ]}
          onPress={() => setSelectedSentiment(sent)}
        >
          <Text
            style={[
              styles.optionText,
              selectedSentiment === sent && styles.selectedText
            ]}
          >
            {sent}
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
    justifyContent: 'center'
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#3c4a2a',
    marginBottom: 24,
    textAlign: 'center'
  },
  option: {
    padding: 16,
    marginVertical: 8,
    borderRadius: 12,
    backgroundColor: '#b6e158',
    alignItems: 'center',
    justifyContent: 'center'
  },
  selected: {
    borderWidth: 2,
    borderColor: '#3c4a2a'
  },
  optionText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#3c4a2a'
  },
  selectedText: {
    color: '#3c4a2a'
  }
});
