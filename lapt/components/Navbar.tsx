///Users/danlynmedou/Desktop/smartCity/lapt/components/Navbar.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, usePathname } from 'expo-router';

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();

    const isActive = (routeName: string): boolean => {
        return pathname === routeName;
    };

    const getItemStyle = (routeName: string) => {
        return [
            styles.navItem,
            isActive(routeName) && styles.activeNavItem
        ];
    };

    const getIconColor = (routeName: string): string => {
        return isActive(routeName) ? '#e57373' : 'white';
    };

    const getTextStyle = (routeName: string) => {
        return [
            styles.navText,
            isActive(routeName) && styles.activeNavText
        ];
    };

    return (
        <View style={styles.navbar}>
            <TouchableOpacity 
                style={getItemStyle('/')} 
                onPress={() => router.push('/')}
            >
                <Ionicons name="search" size={24} color={getIconColor('/')} />
                <Text style={getTextStyle('/')}>Recherche</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={getItemStyle('/tickets')} 
                onPress={() => router.push('/tickets' as never)}
            >
                <Ionicons name="ticket-outline" size={24} color={getIconColor('/tickets')} />
                <Text style={getTextStyle('/tickets')}>Tickets</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={getItemStyle('/messages')} 
                onPress={() => router.push('/messages' as never)}
            >
                <Ionicons name="chatbubble-outline" size={24} color={getIconColor('/messages')} />
                <Text style={getTextStyle('/messages')}>Messages</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={getItemStyle('/more')} 
                onPress={() => router.push('/more' as never)}
            >
                <Ionicons name="ellipsis-horizontal" size={24} color={getIconColor('/more')} />
                <Text style={getTextStyle('/more')}>Plus</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#1c1c1e',
      paddingVertical: 10,
      borderTopWidth: 1,
      borderTopColor: '#3a3a3c',
      position : 'absolute', 
      bottom : 0,
      left : 0,
      right : 0,
    },
    navItem: {
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 20,
    },
    activeNavItem: {
        backgroundColor: '#f8a5a5',
    },
    navText: {
      color: 'white',
      fontSize: 12,
      marginTop: 4,
    },
    activeNavText: {
        color: '#e57373',
    },
  });
  
  export default Navbar;