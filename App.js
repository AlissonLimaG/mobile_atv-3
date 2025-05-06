import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import PageOne from './pages/pageOne/PageOne';
import PageTwo from './pages/pageTwo/PageTwo';
import PageTree from './pages/pageTree/PageTree';

function AppContent() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[{ paddingTop: insets.top, backgroundColor:'#1E325C', maxHeight:'100%' }]}>

      <PageTree/>
      {/* <PageTwo/> */}
      {/* <PageOne/> */}

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
