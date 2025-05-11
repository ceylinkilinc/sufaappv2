// utils/firebaseUtils.js
import { db, auth } from '../firebase'; // compat sistemi kullanılıyor
import firebase from 'firebase/compat/app'; // timestamp için

export async function saveAnalysisReport(data) {
  const user = auth.currentUser;

  if (!user) throw new Error("User not logged in");

  await db.collection('analysis_reports').add({
    uid: user.uid,
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
