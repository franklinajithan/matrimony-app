import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Ionicons,
  Feather,
  MaterialCommunityIcons,
  AntDesign,
} from '@expo/vector-icons';

export default function MatchesScreen() {
  const features = [
    {
      icon: <Feather name="zap" size={20} color="#4b5563" />,
      title: 'Smart Matches',
      subtitle: 'AI-based suggestions from your preferences',
    },
    {
      icon: <MaterialCommunityIcons name="zodiac-aquarius" size={20} color="#4b5563" />,
      title: 'Horoscope Matches',
      subtitle: 'Astrological compatibility filtered results',
    },
    {
      icon: <Ionicons name="people-circle-outline" size={20} color="#4b5563" />,
      title: 'Mutual Matches',
      subtitle: 'People who liked you and match your preferences',
    },
    {
      icon: <Feather name="eye" size={20} color="#4b5563" />,
      title: 'Recently Viewed',
      subtitle: 'Profiles you visited recently',
    },
    {
      icon: <Feather name="star" size={20} color="#4b5563" />,
      title: 'Top Picks',
      subtitle: 'Handpicked profiles just for you',
    },
  ];

  const settings = [
    {
      icon: <Ionicons name="sliders-outline" size={20} color="#4b5563" />,
      title: 'Match Preferences',
      subtitle: 'Age, community, religion, location',
    },
    {
      icon: <AntDesign name="filter" size={20} color="#4b5563" />,
      title: 'Advanced Filters',
      subtitle: 'Height, education, income, etc.',
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView className="px-4">
        {/* Header */}
        <Text className="text-2xl font-bold text-black mt-4 mb-4">Discover Matches</Text>

        {/* Match Features */}
        <View className="bg-white rounded-xl mb-6 divide-y divide-gray-200 shadow-sm">
          {features.map((item, index) => (
            <TouchableOpacity key={index} className="flex-row items-center px-4 py-4">
              {item.icon}
              <View className="ml-4">
                <Text className="text-base text-black font-medium">{item.title}</Text>
                <Text className="text-xs text-gray-500">{item.subtitle}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Preference Settings */}
        <Text className="text-lg font-semibold text-gray-700 mb-2">Matching Preferences</Text>
        <View className="bg-white rounded-xl mb-10 divide-y divide-gray-200 shadow-sm">
          {settings.map((item, index) => (
            <TouchableOpacity key={index} className="flex-row items-center px-4 py-4">
              {item.icon}
              <View className="ml-4">
                <Text className="text-base text-black font-medium">{item.title}</Text>
                <Text className="text-xs text-gray-500">{item.subtitle}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
