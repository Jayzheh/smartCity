///Users/danlynmedou/Desktop/smartCity/lapt/app/tickets.tsx
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import Navbar from '@/components/Navbar';
import { useTheme } from './ThemeContext';

const TicketsScreen = () => {
    const { theme, isDarkMode } = useTheme();
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
        <ScrollView style={styles.content} stickyHeaderIndices={[0]}>
          <View style={[styles.headerContainer, { backgroundColor: theme.backgroundColor }]}>
            <Text style={[styles.title, { color: theme.textColor }]}>Tickets</Text>
            <View style={styles.nfcCardContainer}>
              <View style={[styles.nfcCard, { backgroundColor: isDarkMode ? '#2c2c2e' : '#e0e0e0' }]}>
                <Image
                  source={require('../assets/nfc-icon.png')} 
                  style={styles.nfcIcon}
                />
              </View>
            </View>
          </View>
          <Text style={[styles.sectionTitle, { color: theme.textColor }]}>Dernier ticket acheté</Text>
          <ScrollView style={styles.ticketsContainer}>
            {[
              { zone: 'Zone 3', description: 'Trajet de bus à Lazy Lake' },
              { zone: 'Zone 2', description: 'Trajet de bus à Fatal Fields' },
              { zone: 'Zone 1', description: 'Trajet de bus à Anger' },
              { zone: 'Zone 3', description: 'Trajet de bus à Lazy Lake' },
            ].map((ticket, index) => (
              <View key={index} style={[styles.ticketItem, { backgroundColor: isDarkMode ? '#2c2c2e' : '#f0f0f0' }]}>
                <View>
                  <Text style={[styles.ticketZone, { color: theme.textColor }]}>{ticket.zone}</Text>
                  <Text style={[styles.ticketDescription, { color: isDarkMode ? '#8e8e93' : '#666666' }]}>{ticket.description}</Text>
                </View>
                <TouchableOpacity style={[styles.receiptButton, { backgroundColor: isDarkMode ? '#3a3a3c' : '#d0d0d0' }]}>
                  <Text style={[styles.receiptButtonText, { color: theme.accentColor }]}>Voir reçu</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </ScrollView>
        <Navbar />
      </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  nfcCardContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  nfcCard: {
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
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  ticketsContainer: {
    paddingHorizontal: 20,
  },
  ticketItem: {
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
  },
  ticketDescription: {
    fontSize: 14,
  },
  receiptButton: {
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  receiptButtonText: {
    fontSize: 12,
  },
});

export default TicketsScreen;
