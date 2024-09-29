import React, { useState} from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import TrajetCard from '@/components/TrajetCard';

interface Trip {
    id: string;
    departureTime: string;
    arrivalTime: string;
    duration: string;
    route: string;
    line: string;
  }

  const mockTrips: Trip[] = [
    { id: '1', departureTime: '10:08', arrivalTime: '10:43', duration: '35 min', route: 'Retail Row', line: 'BUS 53' },
    { id: '2', departureTime: '10:21', arrivalTime: '10:58', duration: '37 min', route: 'Pleasant Park', line: 'BUS 54' },
    { id: '3', departureTime: '10:38', arrivalTime: '11:13', duration: '35 min', route: 'Tilted Towers', line: 'BUS 55' },
    { id: '4', departureTime: '10:53', arrivalTime: '11:28', duration: '35 min', route: 'Salty Springs', line: 'BUS 56' },
    { id: '5', departureTime: '11:08', arrivalTime: '11:43', duration: '35 min', route: 'Lazy Lake', line: 'BUS 57' },
    { id: '6', departureTime: '11:21', arrivalTime: '11:58', duration: '37 min', route: 'Sweaty Sands', line: 'BUS 58' },
  ];
  
  export default function VoyageScreen() {
    const { from, to } = useLocalSearchParams();
    const router = useRouter();
    const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);
  
    const renderTripItem = ({ item }: { item: Trip }) => (
      <TouchableOpacity style={styles.tripItem} onPress={() => setSelectedTrip(item)}>
        <View style={styles.tripTimes}>
          <Text style={styles.timeText}>{item.departureTime}</Text>
          <Text style={styles.timeText}>{item.arrivalTime}</Text>
        </View>
        <View style={styles.tripDetails}>
          <Text style={styles.routeText}>{item.route}, {item.line}</Text>
          <Text style={styles.durationText}>{item.duration}</Text>
        </View>
        <Ionicons name="bus-outline" size={24} color="#8E8E93" />
      </TouchableOpacity>
    );
  
    if (selectedTrip) {
      return (
        <TrajetCard
          from={from as string}
          to={to as string}
          departureTime={selectedTrip.departureTime}
          arrivalTime={selectedTrip.arrivalTime}
          duration={selectedTrip.duration}
          busLine={selectedTrip.line}
          busType="Bus de combat"
          onClose={() => setSelectedTrip(null)}
        />
      );
    }
  
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
          style={styles.tripList}
        />
      </SafeAreaView>
    );
  }

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
  tripList: {
    flex: 1,
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
    alignItems: 'center',
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
});
