import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function DonationCentersScreen({ navigation, route }) {
  const centers = [
    { name: 'Local Donation Point' },
    { name: 'Second Chance Store' },
    { name: 'Community Hub' },
  ];

  const title = route?.params?.title || 'Unnamed Product';
  const fromRecommendation = route?.params?.fromRecommendation;

  const handleDone = () => {
    if (fromRecommendation) {
      navigation.navigate('Impact', {
        type: 'donation',
        title,
      });
    } else {
      navigation.navigate('Dashboard');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>Donation Points</Text>
        {centers.map((center, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.name}>{center.name}</Text>
            <TouchableOpacity style={styles.mapButton}>
              <Text style={styles.mapButtonText}>Google Map</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
        <Text style={styles.doneText}>Done</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8ffe6' },
  scroll: { padding: 24 },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
    color: '#2d2d2d',
  },
  card: {
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#000',
  },
  mapButton: {
    backgroundColor: '#7ac81e',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 25,
    alignSelf: 'flex-start',
  },
  mapButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  doneButton: {
    backgroundColor: '#b6e158',
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 24,
    marginBottom: 24,
    borderRadius: 20,
  },
  doneText: {
    fontWeight: '700',
    fontSize: 16,
    color: '#000',
  },
});
