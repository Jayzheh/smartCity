// /Users/danlynmedou/Desktop/smartCity/lapt/app/more.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Navbar from '@/components/Navbar';
import { useRouter } from 'expo-router';

const MoreScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const router = useRouter();

  const toggleDarkMode = () => setIsDarkMode(previousState => !previousState);

  const renderListItem = (title: string, icon: string, showArrow: boolean = true) => (
    <TouchableOpacity style={styles.listItem}>
      <Ionicons name={icon as any} size={24} color="#8e8e93" />
      <Text style={styles.listItemText}>{title}</Text>
      {showArrow && <Ionicons name="chevron-forward" size={24} color="#8e8e93" />}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Plus</Text>
      
      <TouchableOpacity style={styles.accountCard} onPress={() => router.push('/loginScreen')}>
        <View style={styles.accountIconContainer}>
          <Ionicons name="person" size={24} color="white" />
        </View>
        <View style={styles.accountInfo}>
          <Text style={styles.accountTitle}>Mon compte</Text>
          <Text style={styles.accountSubtitle}>Connectez-vous ou créez un compte pour bénéficier de nos avantages</Text>
        </View>
        <Ionicons name="chevron-forward" size={24} color="#8e8e93" />
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Mes Infos</Text>
      {renderListItem('Numéro de téléphone', 'call-outline')}
      {renderListItem('Options de Paiement', 'card-outline')}
      {renderListItem('Coupons', 'pricetag-outline')}
      {renderListItem('Reçus et historique des achats', 'receipt-outline')}

      <View style={styles.darkModeContainer}>
        <Text style={styles.darkModeText}>Mode Claire</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleDarkMode}
          value={isDarkMode}
        />
      </View>

      <Text style={styles.sectionTitle}>Paramètres</Text>
      {renderListItem('Retirer des informations', 'information-circle-outline')}
      {renderListItem('Info trafic et contrôle', 'bus-outline')}
      {renderListItem('Language', 'language-outline')}

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
  accountCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2c2c2e',
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  accountIconContainer: {
    backgroundColor: '#0a84ff',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  accountInfo: {
    flex: 1,
  },
  accountTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  accountSubtitle: {
    color: '#8e8e93',
    fontSize: 12,
  },
  sectionTitle: {
    color: '#8e8e93',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#2c2c2e',
  },
  listItemText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 15,
    flex: 1,
  },
  darkModeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#2c2c2e',
  },
  darkModeText: {
    color: 'white',
    fontSize: 16,
  },
});

export default MoreScreen;

