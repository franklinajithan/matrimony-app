import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function InboxScreen() {
  const [dob, setDob] = useState('');

  const handleViewHoroscope = () => {
    if (!dob.match(/^\d{4}-\d{2}-\d{2}$/)) {
      Alert.alert('Invalid Format', 'Please enter your DOB in YYYY-MM-DD format.');
      return;
    }
    Alert.alert('Horoscope', `Looking up horoscope for: ${dob}`);
  };

  const conversations = [
    {
      name: 'Anjali Sharma',
      message: 'Hi! How are you?',
      time: '2 min ago',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    {
      name: 'Ravi Kumar',
      message: 'Nice to meet you!',
      time: '5 min ago',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: 'Priya Das',
      message: 'Looking forward to chatting!',
      time: '10 min ago',
      avatar: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView className="px-4">
        {/* Header */}
        <Text className="text-2xl font-bold text-black mt-4 mb-4">Inbox</Text>

        {/* New Match Requests */}
        <TouchableOpacity className="bg-white rounded-xl flex-row items-center px-4 py-4 shadow-sm mb-6">
          <Ionicons name="person-add-outline" size={24} color="#4b5563" />
          <View className="ml-4">
            <Text className="text-base text-black font-medium">New Match Requests</Text>
            <Text className="text-xs text-gray-500">Tap to view pending requests</Text>
          </View>
        </TouchableOpacity>

        {/* Conversations List */}
        <View className="bg-white rounded-xl divide-y divide-gray-200 shadow-sm mb-10">
          {conversations.map((chat, index) => (
            <TouchableOpacity
              key={index}
              className="flex-row items-center px-4 py-4"
            >
              <Image
                source={{ uri: chat.avatar }}
                className="w-12 h-12 rounded-full mr-4"
              />
              <View className="flex-1">
                <Text className="text-black font-semibold">{chat.name}</Text>
                <Text className="text-gray-500 text-sm">{chat.message}</Text>
              </View>
              <Text className="text-xs text-gray-400">{chat.time}</Text>
            </TouchableOpacity>
          ))}
        </View>

    
      </ScrollView>
    </SafeAreaView>
  );
}
