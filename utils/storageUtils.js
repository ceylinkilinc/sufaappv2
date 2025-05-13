import { auth, storage } from '../firebase';

// 📦 Görseli Firebase Storage'a yükleyip download URL döndürür
export const saveImageToStorage = async (imageUri) => {
  if (!imageUri) return null;

  const response = await fetch(imageUri);
  const blob = await response.blob();

  const uid = auth.currentUser?.uid;
  const timestamp = Date.now();
  const fileRef = storage.ref().child(`images/${uid}/${timestamp}.jpg`);

  await fileRef.put(blob);
  const downloadUrl = await fileRef.getDownloadURL();

  return downloadUrl;
};
