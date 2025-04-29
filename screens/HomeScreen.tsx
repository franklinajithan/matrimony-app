import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Ionicons,
  FontAwesome5,
  Feather,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

export default function HomeScreen() {
  const features = [
    { icon: <MaterialIcons name="stars" size={20} color="#4b5563" />, title: 'Horoscope Matching' },
    { icon: <Feather name="zap" size={20} color="#4b5563" />, title: 'Smart Matching' },
    { icon: <Ionicons name="shield-checkmark-outline" size={20} color="#4b5563" />, title: 'Privacy Guaranteed' },
    { icon: <Ionicons name="earth-outline" size={20} color="#4b5563" />, title: 'Global Reach' },
    { icon: <FontAwesome5 name="user-circle" size={20} color="#4b5563" />, title: 'In-Depth Profiles' },
    { icon: <Ionicons name="chatbubbles-outline" size={20} color="#4b5563" />, title: 'Secure Messaging' },
    { icon: <Ionicons name="checkmark-circle-outline" size={20} color="#4b5563" />, title: 'Verified Profiles' },
    { icon: <Feather name="layout" size={20} color="#4b5563" />, title: 'Profile Template' },
    { icon: <Feather name="sliders" size={20} color="#4b5563" />, title: 'Custom Preferences' },
    { icon: <Ionicons name="chatbox-ellipses-outline" size={20} color="#4b5563" />, title: 'Real-Time Chat' },
    { icon: <Ionicons name="language-outline" size={20} color="#4b5563" />, title: 'Language Preferences' },
    { icon: <FontAwesome5 name="mobile-alt" size={20} color="#4b5563" />, title: 'Mobile App Support' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView showsVerticalScrollIndicator={false} className="pb-6">

        {/* Greeting Section */}
        <View className="px-4 py-4">
          <Text className="text-xl font-bold text-black">Hi Ajithan 👋</Text>
          <Text className="text-sm text-gray-600">Ready to meet your perfect match today?</Text>
        </View>

        {/* Profile Completion Card */}
        <View className="px-4 mb-4">
          <View className="bg-white p-4 rounded-xl shadow-sm flex-row justify-between items-center">
            <View>
              <Text className="text-base font-semibold text-black">Complete your profile</Text>
              <Text className="text-xs text-gray-500">Improve visibility by 80%</Text>
            </View>
            <TouchableOpacity className="bg-blue-600 px-3 py-1 rounded-full">
              <Text className="text-white text-sm font-medium">Update</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Quick Actions */}
        <View className="px-4 mb-4 flex-row justify-between">
          {[
            { icon: <Ionicons name="heart-circle-outline" size={24} color="#9333ea" />, label: 'Matches' },
            { icon: <Ionicons name="search" size={24} color="#9333ea" />, label: 'Search' },
            { icon: <Ionicons name="person-circle-outline" size={24} color="#9333ea" />, label: 'Profile' },
            { icon: <MaterialCommunityIcons name="crown-outline" size={24} color="#9333ea" />, label: 'Upgrade' },
          ].map((item, index) => (
            <TouchableOpacity key={index} className="items-center">
              {item.icon}
              <Text className="text-xs mt-1 text-gray-700">{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Suggested Profiles */}
        <View className="px-4 mb-6">
          <Text className="text-lg font-bold text-black mb-3">Suggested Profiles</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[...Array(3)].map((_, i) => (
              <View key={i} className="bg-white rounded-xl shadow-sm p-3 w-40 mr-4">
                <Image
                  source={{ uri: `https://randomuser.me/api/portraits/women/${30 + i}.jpg` }}
                  className="w-full h-24 rounded-md mb-2"
                />
                <Text className="text-black font-semibold">User {i + 1}</Text>
                <Text className="text-xs text-gray-500">Age 27 • Bangalore</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Features */}
        <View className="px-4">
          <Text className="text-lg font-bold text-black mb-3">App Features</Text>
          <View className="bg-white rounded-xl shadow-sm divide-y divide-gray-200">
            {features.map((feature, index) => (
              <TouchableOpacity key={index} className="flex-row items-center px-4 py-4">
                {feature.icon}
                <View className="ml-4">
                  <Text className="text-base text-black font-medium">{feature.title}</Text>
                  <Text className="text-xs text-gray-500">Explore this feature now</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
