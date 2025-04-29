import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from 'screens/HomeScreen';
import ProfileScreen from 'screens/ProfileScreen';
import MatchesScreen from 'screens/MatchesScreen';


import './global.css';
import InboxScreen from 'screens/InboxScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
              backgroundColor: '#f8fafc',
              borderTopWidth: 0.5,
              borderTopColor: '#e5e7eb',
              height: 70,
              paddingBottom: 10,
            },
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: '600',
            },
            tabBarActiveTintColor: '#2563eb',
            tabBarInactiveTintColor: '#6b7280',
            tabBarIcon: ({ color, size }) => {
              let iconName: string;

              switch (route.name) {
                case 'Home':
                  iconName = 'home-outline';
                  break;
                case 'Matches':
                  iconName = 'heart-outline';
                  break;
                case 'Inbox':
                  iconName = 'chatbubbles-outline';
                  break;
                case 'Profile':
                  iconName = 'person-outline';
                  break;
                default:
                  iconName = 'ellipse-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Matches" component={MatchesScreen} />
          <Tab.Screen name="Inbox" component={InboxScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
        <StatusBar style="dark" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
