import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

export default function ProductEntry4Screen({ route, navigation }) {
  const { sentimental, usage, category } = route.params;
  const [material, setMaterial] = useState(null);

  const handleNext = () => {
    if (!material) {
      Alert.alert('Please select a material.');
      return;
    }

    navigation.navigate('ProductEntry4_5', {
      sentimental,
      usage,
      category,
      material
    });
  };

  const materialOptions = [
    "100% Cotton / Linen",
    "Cotton blend",
    "Polyester blend",
    "100% synthetic",
    "Non-recyclable"
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>What is the material?</Text>

      <View style={styles.optionsWrapper}>
        {materialOptions.map((mat) => (
          <TouchableOpacity
            key={mat}
            style={[
              styles.materialButton,
              material === mat && styles.materialButtonSelected,
            ]}
            onPress={() => setMaterial(mat)}
          >
            <Text
              style={[
                styles.materialText,
                material === mat && styles.materialTextSelected,
              ]}
            >
              {mat}
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
    fontSize: 22,
    fontWeight: '700',
    color: '#3c4a2a',
    marginBottom: 24,
    textAlign: 'center',
  },
  optionsWrapper: {
    gap: 12,
  },
  materialButton: {
    backgroundColor: '#b6e158',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  materialButtonSelected: {
    borderWidth: 2,
    borderColor: '#3c4a2a',
  },
  materialText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#3c4a2a',
  },
  materialTextSelected: {
    color: '#3c4a2a',
  },
});
