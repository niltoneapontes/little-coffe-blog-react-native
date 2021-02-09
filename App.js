import React from 'react';
import { StyleSheet, StatusBar, Text, View, Alert } from 'react-native';
import { WebView } from 'react-native-webview';
import ErrorScreen from './components/ErrorScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#252422" translucent />
      <WebView source={{ uri: 'https://littlecoffee.vercel.app'}} onError={() => {
        Alert.alert('Oops...', 'Não foi possível carregar o app.')
      }} style={styles.webViewContainer}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#252422',
    flex: 1,
  },
  webViewContainer: {
    flex: 1,
    marginTop: 24,
  }
})