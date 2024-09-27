///Users/danlynmedou/Desktop/smartCity/lapt/components/SearchModal.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import { Ionicons } from '@expo/vector-icons';

interface SearchModalProps {
  isVisible: boolean;
  onClose: () => void;
}

interface RecentSearch {
  id: string;
  from: string;
  to: string;
}

const SearchModal: React.FC<SearchModalProps> = ({ isVisible, onClose }) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const recentSearches: RecentSearch[] = [
    { id: '1', from: 'L\'agence', to: 'Lazy Lake' },
    { id: '2', from: 'Risky Rills', to: 'Angers' },
    { id: '3', from: 'Tilted Tower', to: 'Craggy Cliffs' },
  ];

  const renderRecentSearch = ({ item }: { item: RecentSearch }) => (
    <View style={styles.recentSearchItem}>
      <View style={styles.recentSearchLocations}>
        <Ionicons name="location-outline" size={20} color="#FFA500" />
        <View style={styles.recentSearchText}>
          <Text style={styles.locationText}>{item.from}</Text>
          <Text style={styles.locationText}>{item.to}</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Ionicons name="star-outline" size={20} color="#4FB6FF" />
      </TouchableOpacity>
    </View>
  );

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      onSwipeComplete={onClose}
      swipeDirection={['down']}
      style={styles.modal}
      propagateSwipe
    >
      <View style={styles.container}>
        <Text style={styles.title}>Où voulez-vous voyager?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="De: Ma location"
            placeholderTextColor="#999"
            value={from}
            onChangeText={setFrom}
          />
          <TextInput
            style={styles.input}
            placeholder="À: Où allons-nous ?"
            placeholderTextColor="#999"
            value={to}
            onChangeText={setTo}
          />
        </View>
        <Text style={styles.recentSearchesTitle}>Voyages recherchés</Text>
        <FlatList
          data={recentSearches}
          renderItem={renderRecentSearch}
          keyExtractor={(item) => item.id}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    backgroundColor: '#1C1C1E',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#2C2C2E',
    borderRadius: 10,
    color: 'white',
    padding: 15,
    marginBottom: 10,
    fontSize: 16,
  },
  recentSearchesTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  recentSearchItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2C2C2E',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  recentSearchLocations: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  recentSearchText: {
    marginLeft: 10,
  },
  locationText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 2,
  },
});

export default SearchModal;
