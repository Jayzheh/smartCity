// /Users/danlynmedou/Desktop/smartCity/lapt/app/PaymentOptionsScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface PaymentOption {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
}

interface DataSellOption {
  title: string;
  price: number;
  enabled: boolean;
}

const PAYMENT_OPTIONS: PaymentOption[] = [
  { title: 'Carte de crédit', icon: 'card-outline' },
  { title: 'PayPal', icon: 'logo-paypal' },
  { title: 'Apple Pay', icon: 'logo-apple' },
  { title: 'Google Pay', icon: 'logo-google' },
];

const DATA_SELL_OPTIONS: Omit<DataSellOption, 'enabled'>[] = [
  { title: 'Données de nom', price: 0.10 },
  { title: 'Données de localisation', price: 0.50 },
];

const AVERAGE_RIDES_PER_MONTH = 30;
const TICKET_PRICE = 2.00;

const useDataSellOptions = () => {
  const [options, setOptions] = React.useState<DataSellOption[]>(
    DATA_SELL_OPTIONS.map(option => ({ ...option, enabled: false }))
  );

  const toggleOption = (index: number) => {
    setOptions(prev => prev.map((option, i) => 
      i === index ? { ...option, enabled: !option.enabled } : option
    ));
  };

  const totalEarnings = options.reduce((sum, option) => 
    option.enabled ? sum + option.price : sum, 0
  );

  return { options, toggleOption, totalEarnings };
};

interface PaymentOptionProps {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
}

const PaymentOption: React.FC<PaymentOptionProps> = ({ title, icon }) => (
  <TouchableOpacity style={styles.paymentOption}>
    <Ionicons name={icon} size={24} color="#8e8e93" />
    <Text style={styles.paymentOptionText}>{title}</Text>
    <Ionicons name="chevron-forward" size={24} color="#8e8e93" />
  </TouchableOpacity>
);

interface DataSellOptionProps {
  title: string;
  enabled: boolean;
  onToggle: () => void;
  price: number;
}

const DataSellOption: React.FC<DataSellOptionProps> = ({ title, enabled, onToggle, price }) => (
  <View style={styles.dataSellOption}>
    <View style={styles.dataSellOptionLeft}>
      <Text style={styles.dataSellOptionText}>{title}</Text>
      <TouchableOpacity>
        <Text style={styles.learnMoreText}>En savoir plus</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.dataSellOptionRight}>
      <Text style={styles.dataSellOptionPrice}>{price.toFixed(2)}€ / mois</Text>
      <Switch
        value={enabled}
        onValueChange={onToggle}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={enabled ? "#f5dd4b" : "#f4f3f4"}
      />
    </View>
  </View>
);

const PaymentOptionsScreen: React.FC = () => {
  const router = useRouter();
  const { options, toggleOption, totalEarnings } = useDataSellOptions();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Options de Paiement</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView>
        {PAYMENT_OPTIONS.map((option, index) => (
          <PaymentOption key={index} {...option} />
        ))}
        
        <TouchableOpacity style={styles.addPaymentButton}>
          <Ionicons name="add-circle-outline" size={24} color="#0a84ff" />
          <Text style={styles.addPaymentText}>Ajouter un mode de paiement</Text>
        </TouchableOpacity>

        <View style={styles.dataSellSection}>
          <Text style={styles.dataSellTitle}>Vendre vos données pour des tickets</Text>
          {options.map((option, index) => (
            <DataSellOption
              key={index}
              {...option}
              onToggle={() => toggleOption(index)}
            />
          ))}
          
          <View style={styles.earningsInfo}>
            <Text style={styles.earningsText}>Gain par trajet: {(totalEarnings / AVERAGE_RIDES_PER_MONTH).toFixed(2)}€</Text>
            <Text style={styles.earningsText}>Gain mensuel estimé: {totalEarnings.toFixed(2)}€</Text>
            <Text style={styles.earningsText}>
              Tickets gratuits par mois: {Math.floor(totalEarnings / TICKET_PRICE)}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#2c2c2e',
  },
  paymentOptionText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 15,
    flex: 1,
  },
  addPaymentButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  addPaymentText: {
    color: '#0a84ff',
    fontSize: 16,
    marginLeft: 15,
  },
  dataSellSection: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  dataSellTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  dataSellOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  dataSellOptionLeft: {
    flex: 1,
  },
  dataSellOptionText: {
    color: 'white',
    fontSize: 16,
  },
  learnMoreText: {
    color: '#0a84ff',
    fontSize: 14,
    marginTop: 5,
  },
  dataSellOptionRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dataSellOptionPrice: {
    color: '#8e8e93',
    fontSize: 14,
    marginRight: 10,
  },
  earningsInfo: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#2c2c2e',
    borderRadius: 10,
  },
  earningsText: {
    color: 'white',
    fontSize: 14,
    marginBottom: 5,
  },
});

export default PaymentOptionsScreen;
