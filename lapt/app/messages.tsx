// /Users/danlynmedou/Desktop/smartCity/lapt/app/messages.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Navbar from '@/components/Navbar';

const MessagesScreen = () => {
  const [activeTab, setActiveTab] = useState('Traffic');

  const tabs = ['Traffic', 'Perturbation', 'News'];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Messages</Text>
      <View style={styles.tabContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView style={styles.messageContainer}>
        <Text style={styles.sectionTitle}>INFORMATION TRAFIC</Text>
        <View style={styles.messageItem}>
          <Ionicons name="information-circle-outline" size={24} color="white" style={styles.icon} />
          <Text style={styles.messageText}>Vous pouvez y consulter des informations sur le trafic.</Text>
        </View>
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    padding: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#0a84ff',
  },
  tabText: {
    color: '#8e8e93',
    fontSize: 16,
  },
  activeTabText: {
    color: '#0a84ff',
  },
  messageContainer: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    color: '#8e8e93',
    fontSize: 12,
    marginBottom: 10,
  },
  messageItem: {
    backgroundColor: '#2c2c2e',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  messageText: {
    color: 'white',
    fontSize: 14,
    flex: 1,
  },
});

export default MessagesScreen;
