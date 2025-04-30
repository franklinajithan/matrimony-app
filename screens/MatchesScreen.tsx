import React from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-deck-swiper';
import { Ionicons, Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const dummyProfiles = [
  {
    id: 1,
    name: 'Priya',
    age: 26,
    location: 'London',
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
  },
  {
    id: 2,
    name: 'Neha',
    age: 28,
    location: 'Chennai',
    image: 'https://randomuser.me/api/portraits/women/55.jpg',
  },
  {
    id: 3,
    name: 'Aisha',
    age: 27,
    location: 'Bangalore',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
];

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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="mt-4 px-4">
          <Text className="mb-4 text-2xl font-bold text-black">Swipe Matches</Text>

          {/* Swiper wrapped in fixed-height view */}
          <View className="mb-10" style={{ height: 440 }}>
            <Swiper
              cards={dummyProfiles}
              renderCard={(card) => (
                <View
                  className="overflow-hidden rounded-2xl bg-white shadow-md"
                  style={{ height: 400 }}>
                  <Image source={{ uri: card.image }} className="h-64 w-full" />
                  <View className="p-4">
                    <Text className="text-lg font-bold text-black">
                      {card.name}, {card.age}
                    </Text>
                    <Text className="text-sm text-gray-600">{card.location}</Text>
                  </View>
                </View>
              )}
              backgroundColor="transparent"
              cardHorizontalMargin={16}
              stackSize={2}
              stackSeparation={15}
              verticalSwipe={false}
              disableBottomSwipe
              disableTopSwipe
              overlayLabels={{
                left: {
                  title: 'NOPE',
                  style: {
                    label: {
                      backgroundColor: 'red',
                      color: 'white',
                      fontSize: 20,
                      padding: 4,
                      borderRadius: 4,
                    },
                  },
                },
                right: {
                  title: 'LIKE',
                  style: {
                    label: {
                      backgroundColor: 'green',
                      color: 'white',
                      fontSize: 20,
                      padding: 4,
                      borderRadius: 4,
                    },
                  },
                },
              }}
            />
          </View>

          {/* More Options */}
          <Text className="mb-2 text-xl font-semibold text-black">More Options</Text>
          <View className="mb-6 divide-y divide-gray-200 rounded-xl bg-white shadow-sm">
            {features.map((item, index) => (
              <TouchableOpacity key={index} className="flex-row items-center px-4 py-4">
                {item.icon}
                <View className="ml-4">
                  <Text className="text-base font-medium text-black">{item.title}</Text>
                  <Text className="text-xs text-gray-500">{item.subtitle}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* Matching Preferences */}
          <Text className="mb-2 text-lg font-semibold text-gray-700">Matching Preferences</Text>
          <View className="mb-10 divide-y divide-gray-200 rounded-xl bg-white shadow-sm">
            {settings.map((item, index) => (
              <TouchableOpacity key={index} className="flex-row items-center px-4 py-4">
                {item.icon}
                <View className="ml-4">
                  <Text className="text-base font-medium text-black">{item.title}</Text>
                  <Text className="text-xs text-gray-500">{item.subtitle}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
