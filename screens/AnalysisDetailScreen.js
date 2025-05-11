import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, Image } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

export default function AnalysisDetailScreen({ route, navigation }) {
  const { title, type, date, image, fromAnalysis } = route.params || {};
  const [impactItems, setImpactItems] = useState([]);

  useEffect(() => {
    const getRandomInt = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    const getRandomItem = (arr) =>
      arr[Math.floor(Math.random() * arr.length)];

    const generateImpacts = () => {
      if (type === 'recycle') {
        return [
          { label: 'Water Saved', value: `${getRandomInt(70, 150)} liters` },
          { label: 'Trees Saved', value: `${(Math.random() * 0.4 + 0.1).toFixed(2)} trees` },
          { label: 'Textiles Diverted', value: `${(Math.random() * 1.5 + 0.5).toFixed(1)} kg` }
        ];
      } else if (type === 'donate') {
        return [
          { label: 'People Helped', value: `${getRandomInt(1, 3)} person${Math.random() > 0.5 ? 's' : ''}` },
          { label: 'Waste Reduced', value: Math.random() > 0.3 ? 'Yes' : 'Likely' },
          { label: 'Resources Saved', value: getRandomItem(['Moderate', 'High', 'Significant']) }
        ];
      } else if (type === 'upcycle') {
        return [
          { label: 'New Life Created', value: '✓' },
          { label: 'Waste Avoided', value: '✓' },
          { label: 'Resources Saved', value: getRandomItem(['Reused', 'Repurposed', 'Reimagined']) }
        ];
      }
      return [];
    };

    setImpactItems(generateImpacts());
  }, [type]);

  const goToCenters = () => {
    if (type === 'recycle') {
      navigation.navigate('RecyclingCenters');
    } else if (type === 'donate') {
      navigation.navigate('DonationCenters');
    } else if (type === 'upcycle') {
      navigation.navigate('UpcyclingIdeas');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{date}</Text>

      <View style={styles.impactBox}>
        {impactItems.map((item, index) => (
          <View key={index} style={styles.impactRow}>
            <Text style={styles.label}>{item.label}:</Text>
            <Text style={styles.value}>{item.value}</Text>
          </View>
        ))}
      </View>

      <PrimaryButton
        title={
          type === 'recycle'
            ? 'View Recycling Centers'
            : type === 'donate'
            ? 'View Donation Centers'
            : 'View Upcycling Ideas'
        }
        onPress={goToCenters}
      />

      {fromAnalysis && (
        <PrimaryButton
          title="Back to Analysis"
          onPress={() => navigation.goBack()}
        />
      )}
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
  image: {
    width: '100%',
    height: 180,
    borderRadius: 16,
    marginBottom: 24,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#3c4a2a',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
  },
  impactBox: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 24
  },
  impactRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#3c4a2a',
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3c4a2a',
  },
});
