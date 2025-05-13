// utils/firebaseUtils.js
import { db, auth } from '../firebase';       // firebase compat kullanımı
import firebase from 'firebase/compat/app';    // timestamp için

// 🔸 ANALYSIS REPORT KAYDET
export async function saveAnalysisReport(data) {
  const user = auth.currentUser;
  if (!user) throw new Error("User not logged in");

  await db.collection('analysis_reports').add({
    uid: user.uid,
    email: user.email,
    title: data.title,
    type: data.type,
    date: firebase.firestore.FieldValue.serverTimestamp(),
    image: data.image || null,
    sentimental: data.sentimental,
    usage: data.usage,
    material: data.material,
    price: data.price,
    infrastructure: data.infrastructure,
    scores: data.scores
  });
}

// 🔸 KULLANICIYA ÖZEL ANALİZ RAPORLARINI ÇEK
export async function fetchUserReports() {
  const user = auth.currentUser;
  if (!user) throw new Error("User not logged in");

  const snapshot = await db
    .collection('analysis_reports')
    .where('uid', '==', user.uid)
    .orderBy('date', 'desc')
    .get();

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
    date: doc.data().date?.toDate()?.toLocaleDateString() || 'Unknown date'
  }));
}

// 🔸 DONATION LOKASYONLARINI ÇEK
export async function fetchDonationLocations() {
  const snapshot = await db.collection('donation_locations').get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

// 🔸 RECYCLING LOKASYONLARINI ÇEK
export async function fetchRecyclingLocations() {
  const snapshot = await db.collection('recycling_locations').get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}
