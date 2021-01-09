import React from 'react';
import { StyleSheet, StatusBar, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <>
      <StatusBar></StatusBar>
      <WebView source={{ uri: 'https://littlecoffee.vercel.app'}} />
    </>
  );
}