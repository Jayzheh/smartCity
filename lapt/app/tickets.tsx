///Users/danlynmedou/Desktop/smartCity/lapt/app/tickets.tsx
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import Navbar from '@/components/Navbar';

const TicketsScreen = () => {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.content} stickyHeaderIndices={[0]}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Tickets</Text>
            <View style={styles.nfcCardContainer}>
              <View style={styles.nfcCard}>
                <Image
                  source={require('../assets/nfc-icon.png')} 
                  style={styles.nfcIcon}
                />
              </View>
            </View>
          </View>
          <Text style={styles.sectionTitle}>Dernier ticket acheté</Text>
          <ScrollView style={styles.ticketsContainer}>
            <View style={styles.ticketItem}>
              <View>
                <Text style={styles.ticketZone}>Zone 3</Text>
                <Text style={styles.ticketDescription}>Trajet de bus à Lazy Lake</Text>
              </View>
              <TouchableOpacity style={styles.receiptButton}>
                <Text style={styles.receiptButtonText}>Voir reçu</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.ticketItem}>
              <View>
                <Text style={styles.ticketZone}>Zone 2</Text>
                <Text style={styles.ticketDescription}>Trajet de bus à Fatal Fields</Text>
              </View>
              <TouchableOpacity style={styles.receiptButton}>
                <Text style={styles.receiptButtonText}>Voir reçu</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.ticketItem}>
              <View>
                <Text style={styles.ticketZone}>Zone 1</Text>
                <Text style={styles.ticketDescription}>Trajet de bus à Anger</Text>
              </View>
              <TouchableOpacity style={styles.receiptButton}>
                <Text style={styles.receiptButtonText}>Voir reçu</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.ticketItem}>
              <View>
                <Text style={styles.ticketZone}>Zone 3</Text>
                <Text style={styles.ticketDescription}>Trajet de bus à Lazy Lake</Text>
              </View>
              <TouchableOpacity style={styles.receiptButton}>
                <Text style={styles.receiptButtonText}>Voir reçu</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ScrollView>
        <Navbar />
      </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
  },
  content: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#1c1c1e',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  nfcCardContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  nfcCard: {
    backgroundColor: '#2c2c2e',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 250,
  },
  nfcIcon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  ticketsContainer: {
    paddingHorizontal: 20,
  },
  ticketItem: {
    backgroundColor: '#2c2c2e',
    borderRadius: 10,
    padding: 45,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ticketZone: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  ticketDescription: {
    fontSize: 14,
    color: '#8e8e93',
  },
  receiptButton: {
    backgroundColor: '#3a3a3c',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  receiptButtonText: {
    color: '#0a84ff',
    fontSize: 12,
  },
});

export default TicketsScreen;
