// /Users/danlynmedou/Desktop/smartCity/lapt/app/index.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, PROVIDER_DEFAULT, Marker } from 'react-native-maps';
import { Platform } from 'react-native';
import Navbar from '@/components/Navbar';
import SearchBar from '@/components/SearchBar';

export default function HomeScreen() {
  const strasbourgLocations = [
    { title: "Cathédrale Notre-Dame", coordinate: { latitude: 48.5819, longitude: 7.7508 } },
    { title: "Petite France", coordinate: { latitude: 48.5799, longitude: 7.7431 } },
    { title: "Palais Rohan", coordinate: { latitude: 48.5804, longitude: 7.7522 } },
    { title: "Parc de l'Orangerie", coordinate: { latitude: 48.5900, longitude: 7.7686 } },
    { title: "Place Kléber", coordinate: { latitude: 48.5834, longitude: 7.7457 } }
  ];

  return (
    <View style={styles.container}>
      <MapView 
        provider={Platform.OS === 'ios' ? PROVIDER_DEFAULT : PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 48.5734,
          longitude: 7.7521,
          latitudeDelta: 0.0422,
          longitudeDelta: 0.0221,
        }} 
      >
        {strasbourgLocations.map((location, index) => (
          <Marker
            key={index}
            coordinate={location.coordinate}
            title={location.title}
          />
        ))}
      < SearchBar />  
      </MapView>
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width:'100%',
    height:'100%',
  }
});