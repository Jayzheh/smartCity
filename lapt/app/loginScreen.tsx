// /Users/danlynmedou/Desktop/smartCity/lapt/app/loginScreen.tsx
import React, { useState} from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import LoginModal from '@/components/LoginModal';
import CreateAccountModal from '@/components/CreateAccountModal';

interface LoginScreenProps {
    onClose: () => void;
  }

const LoginScreen: React.FC<LoginScreenProps> = ({ onClose }) => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showCreateAccountModal, setShowCreateAccountModal] = useState(false);

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>My account</Text>
        <View style={styles.avatarContainer}>
            <Ionicons name="person" size={60} color="#white" />
          </View>
          
          <Text style={styles.description}>
            Create an account for your tickets to be protected by the lost ticket warranty. When you are logged in, you can also lend tickets to friends.
          </Text>
          <Text style={styles.description}>
            But keep in mind that you can only be logged in on one phone at a time.
          </Text>
          <Text style={styles.description}>
            If you already have an account at skanetrafiken.se, you can use this to log in.
          </Text>
          <TouchableOpacity style={styles.loginButton} onPress={() => setShowLoginModal(true)}>
            <Text style={styles.loginButtonText}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.createAccountButton} onPress={() => setShowCreateAccountModal(true)}>
            <Text style={styles.createAccountButtonText}>Create Account</Text>
          </TouchableOpacity>
        </View>
        <LoginModal isVisible={showLoginModal} onClose={() => setShowLoginModal(false)} />
        <CreateAccountModal isVisible={showCreateAccountModal} onClose={() => setShowCreateAccountModal(false)} />
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
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FF9500',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    marginTop: 50,
  },
  description: {
    color: '#8e8e93',
    textAlign: 'left',
    marginBottom: 15,
    fontSize: 14,
    marginTop: 25,
  },
  loginButton: {
    backgroundColor: 'grey',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 150,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  createAccountButton: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
  },
  createAccountButtonText: {
    color: 'grey',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
