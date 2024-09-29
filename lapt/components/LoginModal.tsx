// /Users/danlynmedou/Desktop/smartCity/lapt/components/LoginModal.tsx
import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, TextInput, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface LoginModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const handleForgotPasswordPress = () => {
  Linking.openURL('https://lapt-site.vercel.app/#');
};

const LoginModal: React.FC<LoginModalProps> = ({ isVisible, onClose }) => {
  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Ionicons name="close" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.title}>Log in</Text>
          <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#8e8e93" />
          <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#8e8e93" secureTextEntry />
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleForgotPasswordPress}>
            <Text style={styles.forgotPasswordText}>Mot de passe oublié ?</Text>
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
  loginButton: {
    backgroundColor: 'grey',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    color: '#0A84FF',
    textAlign: 'center',
  },
});

export default LoginModal;
