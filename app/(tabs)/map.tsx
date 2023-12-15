import React from 'react';
import { StyleSheet } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { View } from '../../components/Themed';
import MapView from 'react-native-maps';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
