//
import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, TextInput, Switch, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const handleTermsPress = () => {
  Linking.openURL('https://lapt-site.vercel.app/#');
};

interface CreateAccountModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const CreateAccountModal: React.FC<CreateAccountModalProps> = ({ isVisible, onClose }) => {
  const [acceptTerms, setAcceptTerms] = useState(false);

  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Ionicons name="close" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.title}>Create Account</Text>
          <TextInput style={styles.input} placeholder="First name" placeholderTextColor="#8e8e93" />
          <TextInput style={styles.input} placeholder="Last name" placeholderTextColor="#8e8e93" />
          <TextInput style={styles.input} placeholder="Mobile number - optional" placeholderTextColor="#8e8e93" />
          <TextInput style={styles.input} placeholder="Email address - mandatory" placeholderTextColor="#8e8e93" />
          <TextInput style={styles.input} placeholder="Password - mandatory" placeholderTextColor="#8e8e93" secureTextEntry />
          <Text style={styles.passwordHint}>Password must be at least eight characters including at least one number and one letter</Text>
          <TouchableOpacity style={styles.termsButton} onPress={handleTermsPress}>
            <Ionicons name="information-circle-outline" size={24} color="#0A84FF" />
            <Text style={styles.termsButtonText}>Read terms and conditions</Text>
          </TouchableOpacity>
          <View style={styles.termsContainer}>
            <Text style={styles.termsText}>I have read the terms and I accept them.</Text>
            <Switch
              value={acceptTerms}
              onValueChange={setAcceptTerms}
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={acceptTerms ? "#f5dd4b" : "#f4f3f4"}
            />
          </View>
          <TouchableOpacity style={[styles.createAccountButton, !acceptTerms && styles.disabledButton]} disabled={!acceptTerms}>
            <Text style={styles.createAccountButtonText}>Create account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        backgroundColor: '#1c1c1e',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
      },
      closeButton: {
        alignSelf: 'flex-end',
        padding: 10,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
      },
      input: {
        backgroundColor: '#2c2c2e',
        borderRadius: 8,
        padding: 15,
        marginBottom: 15,
        color: 'white',
      },
    passwordHint: {
        color: '#8e8e93',
        fontSize: 12,
        marginBottom: 15,
    },
    termsButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    termsButtonText: {
        color: '#0A84FF',
        marginLeft: 10,
    },
    termsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    termsText: {
        color: 'white',
        flex: 1,
    },
    createAccountButton: {
        backgroundColor: 'grey',
        borderRadius: 25,
        paddingVertical: 15,
        alignItems: 'center',
    },
    createAccountButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    disabledButton: {
        opacity: 0.5,
    },
});

export default CreateAccountModal;
