import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Ionicons,
  Feather,
  MaterialIcons,
  FontAwesome5,
} from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView className="px-4">
        {/* Header */}
        <Text className="text-2xl font-bold text-black mt-4 mb-2">My Profile</Text>

        {/* Search */}
        <View className="bg-white rounded-lg px-4 py-2 shadow-sm mb-4">
          <TextInput
            placeholder="Search Settings"
            placeholderTextColor="#9ca3af"
            className="text-black"
          />
        </View>

        {/* User Info */}
        <TouchableOpacity className="bg-white flex-row items-center px-4 py-4 rounded-xl mb-6 shadow-sm">
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg' }}
            className="w-14 h-14 rounded-full mr-4"
          />
          <View className="flex-1">
            <Text className="text-lg font-semibold text-black">Ajithan</Text>
            <Text className="text-gray-500 text-sm">View & Edit Profile</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#4b5563" />
        </TouchableOpacity>

        {/* Profile Features Section */}
        <View className="bg-white rounded-xl mb-6 divide-y divide-gray-200 shadow-sm">
          {[
            { icon: <Feather name="edit-3" size={20} color="#4b5563" />, label: 'Profile Template' },
            { icon: <Ionicons name="checkmark-circle-outline" size={20} color="#4b5563" />, label: 'Verified Profile' },
            { icon: <Feather name="settings" size={20} color="#4b5563" />, label: 'Custom Preferences' },
            { icon: <Ionicons name="globe-outline" size={20} color="#4b5563" />, label: 'Language Preferences' },
            { icon: <Ionicons name="shield-checkmark-outline" size={20} color="#4b5563" />, label: 'Privacy Settings' },
          ].map((item, index) => (
            <TouchableOpacity key={index} className="flex-row items-center px-4 py-3">
              {item.icon}
              <Text className="ml-4 text-black text-base">{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* App & Support Section */}
        <View className="bg-white rounded-xl mb-10 divide-y divide-gray-200 shadow-sm">
          {[
            { icon: <FontAwesome5 name="mobile-alt" size={20} color="#4b5563" />, label: 'Mobile App Support' },
            { icon: <Ionicons name="help-circle-outline" size={20} color="#4b5563" />, label: 'Help & Feedback' },
            { icon: <MaterialIcons name="logout" size={20} color="#ef4444" />, label: 'Log Out', isDanger: true },
          ].map((item, index) => (
            <TouchableOpacity key={index} className="flex-row items-center px-4 py-3">
              {item.icon}
              <Text className={`ml-4 text-base ${item.isDanger ? 'text-red-500' : 'text-black'}`}>
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
