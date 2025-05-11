// utils/decisionAlgorithm.js

const usageMap = {
  "New / Excellent": 1.0,
  "Minor wear": 0.8,
  "Some damage": 0.5,
  "Significant damage": 0.2,
  "Unwearable": 0.0
};

const materialMap = {
  "100% Cotton / Linen": 1.0,
  "Cotton blend": 0.7,
  "Polyester blend": 0.45,
  "100% synthetic": 0.2,
  "Non-recyclable": 0.0
};

const priceMap = {
  "3000 TL +": 1.0,
  "1000-3000": 0.6,
  "1-1000": 0.3,
  "Free / gifted": 0.1
};

const infrastructureMap = {
  "Recycling bin nearby": 1.0,
  "Textile bin in neighborhood": 0.8,
  "Needs transport or shipping": 0.5,
  "No known recycling options": 0.2
};

const sentimentalMap = {
  "Deeply meaningful": 1.0,
  "Moderate emotional value": 0.7,
  "Slight attachment": 0.4,
  "No sentiment": 0.1
};

const weights = {
  recycle: {
    usage: 0.3,
    material: 0.3,
    price: 0.15,
    infrastructure: 0.2,
    sentimental: 0.05
  },
  donate: {
    usage: 0.25,
    material: 0.2,
    price: 0.2,
    infrastructure: 0.2,
    sentimental: 0.15
  },
  upcycle: {
    usage: 0.25,
    material: 0.2,
    price: 0.1,
    infrastructure: 0.2,
    sentimental: 0.2  // ↓ düşürüldü
  }
};

export function calculateDecisionScores(input) {
  const usageScore = usageMap[input.usage] ?? 0;
  const materialScore = materialMap[input.material] ?? 0;
  const priceScore = priceMap[input.price] ?? 0;
  const infraScore = infrastructureMap[input.infrastructure] ?? 0;
  const sentimentalScore = sentimentalMap[input.sentimental] ?? 0;

  const scores = {};

  for (const option of ["recycle", "donate", "upcycle"]) {
    const w = weights[option];
    const total =
      usageScore * w.usage +
      materialScore * w.material +
      priceScore * w.price +
      infraScore * w.infrastructure +
      sentimentalScore * w.sentimental;

    scores[option] = total.toFixed(3);
  }

  const recommendation = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  return { scores, recommendation };
}
