// /Users/danlynmedou/Desktop/smartCity/lapt/app/messages.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Navbar from '@/components/Navbar';

const MessagesScreen = () => {
  const [activeTab, setActiveTab] = useState('Traffic');

  const tabs = ['Traffic', 'Perturbation', 'News'];

  const newsItems = [
    {
      date: { day: '23', month: 'avril' },
      title: 'Travis Scott !',
      subtitle: 'Le millionaire Midas achète tweeter',
      headline: 'Travis Scott en concert à Sweaty Sands',
      content: `Des entrelacs de lumières dignes des meilleurs shows laser, des changements de décors, un public en folie : un concert historique a bien eu lieu sur notre île. Le 23 avril, le rappeur Travis Scott s'est produit en live, interprétant un medley de ses tubes dans des décors de parcs d'attractions en flammes, de mondes subaquatiques et de cieux étoilés.`,
      color: '#FF69B4'
    },
    {
      date: { day: '25', month: 'avril' },
      title: 'Nouveau Bus !',
      subtitle: 'Une ligne express vers le centre-ville',
      headline: 'Lancement d\'une nouvelle ligne de bus express',
      content: 'La ville annonce le lancement d\'une nouvelle ligne de bus express reliant les quartiers périphériques au centre-ville. Ce service vise à réduire le temps de trajet et à encourager l\'utilisation des transports en commun.',
      color: '#4CAF50'
    },
    {
      date: { day: '27', month: 'avril' },
      title: 'Fête de la Ville',
      subtitle: 'Célébrons ensemble ce week-end',
      headline: 'Grande fête de la ville ce week-end',
      content: 'Ne manquez pas la grande fête de la ville ce week-end ! Au programme : concerts, animations de rue, feux d\'artifice et bien d\'autres surprises. Venez nombreux pour célébrer notre belle cité !',
      color: '#FFA500'
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Traffic':
        return (
          <>
            <Text style={styles.sectionTitle}>INFORMATION TRAFIC</Text>
            <View style={styles.messageItem}>
              <Ionicons name="information-circle-outline" size={24} color="white" style={styles.icon} />
              <Text style={styles.messageText}>Vous pouvez y consulter des informations sur le trafic.</Text>
            </View>
          </>
        );
      case 'Perturbation':
        return (
          <View style={styles.messageItem}>
            <Ionicons name="information-circle-outline" size={24} color="#8e8e93" style={styles.icon} />
            <View>
              <Text style={styles.messageText}>Ici vous pouvez vous renseigner sur les incidents.</Text>
              <Text style={styles.messageSubtext}>Et les incidents majeurs dans votre région.</Text>
            </View>
          </View>
        );
        case 'News':
            return (
                <>
                <Text style={styles.sectionTitle}>NEWS</Text>
                {newsItems.map((item, index) => (
                    <View key={index} style={styles.newsContainer}>
                    <View style={[styles.newsCard, { backgroundColor: item.color }]}>
                        <View style={styles.dateCircle}>
                        <Text style={styles.dateText}>{item.date.day}</Text>
                        <Text style={styles.dateMonth}>{item.date.month}</Text>
                        </View>
                        <Text style={styles.newsTitle}>{item.title}</Text>
                        <Text style={styles.newsSubtitle}>{item.subtitle}</Text>
                    </View>
                    <View style={styles.newsContentContainer}>
                        <Text style={styles.newsHeadline}>{item.headline}</Text>
                        <Text style={styles.newsContent}>{item.content}</Text>
                    </View>
                    </View>
                ))}
                </>
            );
      default:
        return null;
    }
  };

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
        {renderTabContent()}
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
  messageSubtext: {
    color: '#8e8e93',
    fontSize: 12,
    marginTop: 5,
  },
  newsContainer: {
    backgroundColor: '#2c2c2e',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
  },
  newsCard: {
    backgroundColor: '#FF69B4',
    borderRadius: 10,
    padding: 100,
    marginBottom: 20,
  },
  dateCircle: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#FF4500',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  dateMonth: {
    color: 'white',
    fontSize: 10,
  },
  newsTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  newsSubtitle: {
    color: 'white',
    fontSize: 16,
  },
  newsContentContainer: {
    padding: 20,
  },
  newsHeadline: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  newsContent: {
    color: '#8e8e93',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 25,
  },
});

export default MessagesScreen;
