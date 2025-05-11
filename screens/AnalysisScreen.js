import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { calculateDecisionScores } from '../utils/decisionAlgorithm';
import PrimaryButton from '../components/PrimaryButton';
import { useAnalysis } from '../context/AnalysisContext';

export default function AnalysisScreen({ route, navigation }) {
  const {
    sentimental,
    usage,
    material,
    price,
    infrastructure,
    category,
    title,
    image
  } = route.params;

  const [result, setResult] = useState(null);
  const { addAnalysis } = useAnalysis();

  useEffect(() => {
    const scores = calculateDecisionScores({
      sentimental,
      usage,
      material,
      price,
      infrastructure
    });

    const date = new Date().toLocaleDateString();
    const type = scores.recommendation;

    addAnalysis({ title, image, type, date });
    setResult(scores);
  }, []);

  const handleDone = () => {
    navigation.navigate('Dashboard');
  };

  const handleImpact = () => {
    navigation.navigate('AnalysisDetail', {
      type: result.recommendation,
      title,
      image,
      date: new Date().toLocaleDateString()
    });
  };

  if (!result) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Analyzing...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Best Option: {result.recommendation.toUpperCase()}</Text>

      <Image source={{ uri: image }} style={styles.image} />

      <Text style={styles.product}>{title}</Text>
      <Text style={styles.label}>Recommendation Scores:</Text>

      {Object.entries(result.scores).map(([key, value]) => (
        <Text key={key} style={styles.score}>
          {key}: {value}
        </Text>
      ))}

      <PrimaryButton title="View Impact" onPress={handleImpact} style={{ marginTop: 24 }} />
      <PrimaryButton title="Done" onPress={handleDone} style={{ marginTop: 12 }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8ffe6',
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3c4a2a',
    marginBottom: 16,
    textAlign: 'center',
  },
  product: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 8,
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8
  },
  score: {
    fontSize: 16,
    marginVertical: 2
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 16,
    marginVertical: 16
  }
});
