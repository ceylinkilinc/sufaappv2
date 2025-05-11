import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function UpcyclingIdeasScreen({ navigation, route }) {
  const ideas = [
    { name: 'Tote Bag from Old Shirt' },
    { name: 'Denim Patch Pillow' },
    { name: 'Jar Cap Pincushion' },
  ];

  const title = route?.params?.title || 'Unnamed Product';
  const fromRecommendation = route?.params?.fromRecommendation;

  const handleDone = () => {
    if (fromRecommendation) {
      navigation.navigate('Impact', {
        type: 'upcycle',
        title,
      });
    } else {
      navigation.navigate('Dashboard');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>Upcycling Ideas</Text>
        {ideas.map((idea, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.name}>{idea.name}</Text>
            <TouchableOpacity style={styles.mapButton}>
              <Text style={styles.mapButtonText}>Show</Text>
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
