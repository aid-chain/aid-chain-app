import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../../components/Themed';
import MapView, { Marker } from 'react-native-maps';
import * as Location from "expo-location";
import { LocationObject } from 'expo-location';

export default function MapScreen() {
  const [location, setLocation] = useState<LocationObject | null>(null);

  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
  return (
    <View style={styles.container}>
      <MapView style={styles.map} showsUserLocation={location !== null}>
        <Marker coordinate={{
          latitude: (location?.coords.latitude || 39.924326503122906) + 0.0005, longitude: (location?.coords.longitude || 32.86163012250892) + 0.0005
        }} />
      </MapView>
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
