import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';
import { useAnalysis } from '../context/AnalysisContext';
import PrimaryButton from '../components/PrimaryButton';

export default function MyReportsScreen({ navigation }) {
  const { entries } = useAnalysis();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('AnalysisDetail', {
          title: item.title,
          type: item.type,
          image: item.image,
          date: item.date
        })
      }
    >
      {item.image && <Image source={{ uri: item.image }} style={styles.image} />}
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.type}>{item.type.toUpperCase()}</Text>
      <Text style={styles.date}>{item.date}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Analysis Reports</Text>

      {entries.length === 0 ? (
        <Text style={styles.empty}>No analyses yet.</Text>
      ) : (
        <FlatList
          data={entries}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 24 }}
        />
      )}

      <PrimaryButton
        title="Back to Dashboard"
        onPress={() => navigation.navigate('Dashboard')}
        style={{ marginTop: 12 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8ffe6',
    padding: 24,
  },
  header: {
    fontSize: 24,        // recycling ile eşitlendi
    fontWeight: '700',    // aynı ağırlık
    marginBottom: 16,     // aynı alt boşluk
    color: '#2d2d2d',     // aynı renk
    textAlign: 'left',    // sola hizalı
  },
  empty: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginTop: 32,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 140,
    borderRadius: 12,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#3c4a2a',
    marginBottom: 4,
  },
  type: {
    fontSize: 14,
    color: '#6b8e23',
    marginBottom: 2,
  },
  date: {
    fontSize: 12,
    color: '#888',
  },
});
