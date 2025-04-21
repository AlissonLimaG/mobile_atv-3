import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import PageOne from './pages/pageOne/PageOne';

function AppContent() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[{ paddingTop: insets.top, backgroundColor:'#1E325C', maxHeight:'100%' }]}>

      <PageOne/>

    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <AppContent />
    </SafeAreaProvider>
  );
}
