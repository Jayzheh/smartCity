///Users/danlynmedou/Desktop/smartCity/lapt/app/_layout.tsx
import { DarkTheme, DefaultTheme, ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Tabs } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import Navbar from '@/components/Navbar';
import { ThemeProvider, useTheme } from './ThemeContext';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function Navigation() {
  const { isDarkMode, theme } = useTheme();

  const customLightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.backgroundColor,
      text: theme.textColor,
      primary: theme.accentColor,
    },
  };

  return (
    <NavigationThemeProvider value={isDarkMode ? DarkTheme : customLightTheme}>
      <Tabs tabBar={(props: any) => <Navbar {...props} />}>
        <Tabs.Screen name="index" options={{ title: 'Recherche' }} />
        <Tabs.Screen name="tickets" options={{ title: 'Tickets' }} />
        <Tabs.Screen name="messages" options={{ title: 'Messages' }} />
        <Tabs.Screen name="more" options={{ title: 'Plus' }} />
        <Tabs.Screen name="voyages" options={{ title: 'Voyages' }} />
      </Tabs>
    </NavigationThemeProvider>
  );
}

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
}
