import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Alert
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { auth, db } from '../firebase';

export default function AccountInfoScreen({ navigation }) {
  const uid = auth.currentUser?.uid;
  const [info, setInfo] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    dob: '',
  });

  useEffect(() => {
    if (!uid) return;
    const unsub = db
      .collection('users')
      .doc(uid)
      .onSnapshot(
        doc => {
          if (doc.exists) setInfo(doc.data());
        },
        err => {
          console.error(err);
          Alert.alert('Error', 'Could not load your info.');
        }
      );
    return () => unsub();
  }, [uid]);

  const handleSave = () => {
    if (!uid) return;
    db.collection('users')
      .doc(uid)
      .set(info, { merge: true })
      .then(() => navigation.goBack())
      .catch(err => {
        console.error(err);
        Alert.alert('Error', 'Could not save your info.');
      });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f8ffe6' }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.title}>Account Info</Text>

          <TextInput
            placeholder="Full Name"
            value={info.name}
            onChangeText={text => setInfo({ ...info, name: text })}
            style={styles.input}
          />
          <TextInput
            placeholder="Email"
            value={info.email}
            onChangeText={text => setInfo({ ...info, email: text })}
            style={styles.input}
            keyboardType="email-address"
          />
          <TextInput
            placeholder="Phone Number"
            value={info.phone}
            onChangeText={text => setInfo({ ...info, phone: text })}
            style={styles.input}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="Gender"
            value={info.gender}
            onChangeText={text => setInfo({ ...info, gender: text })}
            style={styles.input}
          />
          <TextInput
            placeholder="Date of Birth"
            value={info.dob}
            onChangeText={text => setInfo({ ...info, dob: text })}
            style={styles.input}
          />

          <TouchableOpacity
            style={styles.doneButton}
            onPress={handleSave}
          >
            <Text style={styles.doneText}>Done</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,      
    flexGrow: 1
  },
  title: {
    fontSize: 24,     
    fontWeight: '700',
    marginBottom: 16,
    textAlign: 'left',
    color: '#2d2d2d', 
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 12,
    borderRadius: 8,
    padding: 10,
    backgroundColor: 'white',
  },
  doneButton: {
    marginTop: 32,
    backgroundColor: '#b6e158',
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 24,
    borderRadius: 20,
  },
  doneText: {
    fontWeight: '700',
    fontSize: 16,
    color: '#000',
  },
});
