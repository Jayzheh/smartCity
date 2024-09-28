// /Users/danlynmedou/Desktop/smartCity/lapt/app/voyages.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';

const mockTrips = [
  { id: '1', departureTime: '10:08', arrivalTime: '10:43', duration: '35 min', route: 'Gare Centrale', line: 'Tram A' },
  { id: '2', departureTime: '10:21', arrivalTime: '10:58', duration: '37 min', route: 'Gare Centrale', line: 'Tram B' },
  { id: '3', departureTime: '10:38', arrivalTime: '11:13', duration: '35 min', route: 'Homme de Fer', line: 'Tram C' },
  { id: '4', departureTime: '10:53', arrivalTime: '11:28', duration: '35 min', route: 'Gare Centrale', line: 'Tram A' },
  { id: '5', departureTime: '11:08', arrivalTime: '11:43', duration: '35 min', route: 'Homme de Fer', line: 'Tram C' },
  { id: '6', departureTime: '11:21', arrivalTime: '11:58', duration: '37 min', route: 'Gare Centrale', line: 'Tram B' },
];

export default function VoyageScreen() {
    const { from, to } = useLocalSearchParams();
    const router = useRouter();
  
    const renderTripItem = ({ item }: { item: typeof mockTrips[0] }) => (
      <TouchableOpacity style={styles.tripItem}>
        <View style={styles.tripTimes}>
          <Text style={styles.timeText}>{item.departureTime}</Text>
          <Text style={styles.timeText}>{item.arrivalTime}</Text>
        </View>
        <View style={styles.tripDetails}>
          <Text style={styles.durationText}>{item.duration}</Text>
          <Text style={styles.routeText}>{item.route}, {item.line}</Text>
        </View>
        <Ionicons name="bus" size={24} color="#8E8E93" />
      </TouchableOpacity>
    );
  
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Sélectionner un voyage</Text>
          <TouchableOpacity>
            <Text style={styles.filterText}>Filtrer</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.routeInfo}>
          <View style={styles.routeRow}>
            <Text style={styles.routeText}>De: {from || 'Pleasant Park'}</Text>
            <TouchableOpacity>
              <Ionicons name="swap-vertical" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <Text style={styles.routeText}>À: {to || 'Lazy Lake'}</Text>
          <View style={styles.routeRow}>
            <Text style={styles.routeText}>Quand: Maintenant (10:03)</Text>
            <TouchableOpacity>
              <Ionicons name="calendar-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={mockTrips}
          renderItem={renderTripItem}
          keyExtractor={(item) => item.id}
        />
        <View style={styles.bottomNav}>
          <TouchableOpacity>
            <Ionicons name="search" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="ticket-outline" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="person-outline" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="ellipsis-horizontal" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#2C2C2E',
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  filterText: {
    color: 'white',
  },
  routeInfo: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#2C2C2E',
  },
  routeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  routeText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 8,
  },
  tripItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#2C2C2E',
    alignItems: 'center',
  },
  tripTimes: {
    marginRight: 16,
  },
  timeText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tripDetails: {
    flex: 1,
  },
  durationText: {
    color: '#8E8E93',
    fontSize: 14,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#2C2C2E',
  },
});
