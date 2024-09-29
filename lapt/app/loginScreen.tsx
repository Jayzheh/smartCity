// /Users/danlynmedou/Desktop/smartCity/lapt/app/loginScreen.tsx
import React, { useState} from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import LoginModal from '@/components/LoginModal';
import CreateAccountModal from '@/components/CreateAccountModal';
import { useTheme } from './ThemeContext';

interface LoginScreenProps {
    onClose: () => void;
  }

const LoginScreen: React.FC<LoginScreenProps> = ({ onClose }) => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showCreateAccountModal, setShowCreateAccountModal] = useState(false);
    const { theme } = useTheme();

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
          <TouchableOpacity onPress={onClose} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color={theme.textColor} />
          </TouchableOpacity>
          <View style={styles.content}>
            <Text style={[styles.title, { color: theme.textColor }]}>My account</Text>
            <View style={[styles.avatarContainer, { backgroundColor: theme.accentColor }]}>
              <Ionicons name="person" size={60} color={theme.backgroundColor} />
            </View>
            
            <Text style={[styles.description, { color: theme.textColor }]}>
              Create an account for your tickets to be protected by the lost ticket warranty. When you are logged in, you can also lend tickets to friends.
            </Text>
            <Text style={[styles.description, { color: theme.textColor }]}>
              But keep in mind that you can only be logged in on one phone at a time.
            </Text>
            <Text style={[styles.description, { color: theme.textColor }]}>
              If you already have an account at skanetrafiken.se, you can use this to log in.
            </Text>
            <TouchableOpacity 
              style={[styles.loginButton, { backgroundColor: theme.accentColor }]} 
              onPress={() => setShowLoginModal(true)}
            >
              <Text style={[styles.loginButtonText, { color: theme.backgroundColor }]}>Log in</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.createAccountButton, { borderColor: theme.accentColor }]} 
              onPress={() => setShowCreateAccountModal(true)}
            >
              <Text style={[styles.createAccountButtonText, { color: theme.accentColor }]}>Create Account</Text>
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
        },
        backButton: {
          padding: 20,
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
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20,
        },
        title: {
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 20,
        },
        description: {
          textAlign: 'left',
          marginBottom: 15,
          fontSize: 14,
          marginTop: 25,
        },
        loginButton: {
          borderRadius: 25,
          paddingVertical: 15,
          paddingHorizontal: 20,
          width: '100%',
          alignItems: 'center',
          marginBottom: 15,
          marginTop: 150,
        },
        loginButtonText: {
          fontSize: 16,
          fontWeight: 'bold',
        },
        createAccountButton: {
          borderWidth: 1,
          borderRadius: 25,
          paddingVertical: 15,
          paddingHorizontal: 20,
          width: '100%',
          alignItems: 'center',
        },
        createAccountButtonText: {
          fontSize: 16,
          fontWeight: 'bold',
        },
      });      

export default LoginScreen;
