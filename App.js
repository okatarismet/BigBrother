import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import {NativeModules} from 'react-native';

const {VoiceChangingModule} = NativeModules;

export default function App() {
  const [locked,setLocked] = React.useState(false);
  const changeToAlein = () => {
    Platform.OS === 'android' && VoiceChangingModule.changeVoiceToAlien(audioTrackURL)
  };
  return (
    <View style={styles.container}>
      <Text>locked maybe  {locked ? '++++++' : 'XXXXX'}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
