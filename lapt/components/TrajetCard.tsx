///Users/danlynmedou/Desktop/smartCity/lapt/components/TrajetCard.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Platform, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import MapView, { PROVIDER_GOOGLE, PROVIDER_DEFAULT, Marker } from 'react-native-maps';

interface TrajetCardProps {
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  busLine: string;
  busType: string;
}

const TrajetCard: React.FC<TrajetCardProps> = ({
  from,
  to,
  departureTime,
  arrivalTime,
  duration,
  busLine,
  busType,
}) => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Trajets</Text>
        <View style={{ width: 24 }} />
      </View>

      <Text style={styles.route}>{from} - {to}</Text>
      <Text style={styles.travelTime}>Travel time: {duration}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sélectionner un ticket</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Contrôle</Text>
        </TouchableOpacity>
      </View>

      <MapView
        provider={Platform.OS === 'ios' ? PROVIDER_DEFAULT : PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 48.5734,
          longitude: 7.7521,
          latitudeDelta: 0.0422,
          longitudeDelta: 0.0221,
        }}
        customMapStyle={darkMapStyle}
      >
        <Marker coordinate={{ latitude: 48.5734, longitude: 7.7521 }} />
      </MapView>

      <Text style={styles.dateText}>Aujourd'hui Mercredi</Text>

      <View style={styles.tripDetails}>
        <View style={styles.timelineContainer}>
          <View style={styles.timeline} />
          <View style={styles.timelineDot} />
          <View style={[styles.timelineDot, styles.bottomDot]} />
        </View>
        <View style={styles.tripInfo}>
          <View style={styles.tripInfoItem}>
            <Text style={styles.time}>{departureTime}</Text>
            <Text style={styles.location}>{from}</Text>
            <View style={styles.busInfo}>
              <Text style={styles.busLine}>{busLine}</Text>
              <Ionicons name="bus" size={16} color="white" />
              <Text style={styles.busType}>{busType}</Text>
            </View>
            <Text style={styles.direction}>Towards Lucky Landing</Text>
          </View>
          <View style={styles.tripInfoItem}>
            <Text style={styles.time}>{arrivalTime}</Text>
            <Text style={styles.location}>{to}</Text>
            <Text style={styles.platformInfo}>Voie : Voir sur le tableau</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.chooseTicketButton}>
        <Text style={styles.chooseTicketButtonText}>Choisir ce ticket</Text>
      </TouchableOpacity>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="search" size={24} color="white" />
          <Text style={styles.navText}>Recherche</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="ticket-outline" size={24} color="white" />
          <Text style={styles.navText}>Tickets</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="chatbubble-outline" size={24} color="white" />
          <Text style={styles.navText}>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="ellipsis-horizontal" size={24} color="white" />
          <Text style={styles.navText}>Plus</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const darkMapStyle = [
  {
    "elementType": "geometry",
    "stylers": [{ "color": "#242f3e" }]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [{ "color": "#746855" }]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [{ "color": "#242f3e" }]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [{ "color": "#d59563" }]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [{ "color": "#38414e" }]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [{ "color": "#212a37" }]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [{ "color": "#9ca5b3" }]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{ "color": "#17263c" }]
  }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  route: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 16,
  },
  travelTime: {
    color: '#8E8E93',
    fontSize: 14,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#2C2C2E',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1,
    marginHorizontal: 4,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
  map: {
    height: 200,
    marginBottom: 16,
  },
  dateText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  tripDetails: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  timelineContainer: {
    width: 20,
    alignItems: 'center',
    marginRight: 8,
  },
  timeline: {
    width: 2,
    height: '100%',
    backgroundColor: '#8E8E93',
    position: 'absolute',
  },
  timelineDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#8E8E93',
  },
  bottomDot: {
    marginTop: 'auto',
  },
  tripInfo: {
    flex: 1,
  },
  tripInfoItem: {
    marginBottom: 16,
  },
  time: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  location: {
    color: 'white',
    fontSize: 16,
  },
  busInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  busLine: {
    color: 'white',
    marginRight: 8,
    backgroundColor: '#007AFF',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  busType: {
    color: 'white',
    marginLeft: 8,
  },
  direction: {
    color: '#8E8E93',
    fontSize: 14,
    marginTop: 4,
  },
  platformInfo: {
    color: '#8E8E93',
    fontSize: 14,
    marginTop: 4,
  },
  chooseTicketButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 16,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  chooseTicketButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#2C2C2E',
    paddingVertical: 8,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: 'white',
    fontSize: 12,
    marginTop: 4,
  },
});

export default TrajetCard;

