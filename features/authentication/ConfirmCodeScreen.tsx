// 📁 features/authentication/ConfirmCodeScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { confirmSignUp } from '@aws-amplify/auth';
import { useNavigation } from '@react-navigation/native';

const ConfirmCodeScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');

  const handleConfirm = async () => {
    if (!email || !code) {
      Alert.alert('Validation Error', 'Please enter both email and confirmation code.');
      return;
    }

    try {
      await confirmSignUp({ username: email, confirmationCode: code });
      Alert.alert('Confirmed', 'You can now sign in.');
      navigation.navigate('SignIn');
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Something went wrong');
    }
  };

  return (
    <View className="flex-1 justify-center px-6 bg-white">
      <Text className="text-3xl font-extrabold text-center text-indigo-600 mb-2">💞 Cupid Knots</Text>
      <Text className="text-xl font-bold text-center text-gray-800 mb-8">Confirm Your Email</Text>

      <TextInput
        className="border border-gray-300 rounded-md p-3 mb-4 text-sm"
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
      />

      <TextInput
        className="border border-gray-300 rounded-md p-3 mb-4 text-sm"
        placeholder="Confirmation Code"
        keyboardType="numeric"
        onChangeText={setCode}
        value={code}
      />

      <TouchableOpacity
        onPress={handleConfirm}
        className="bg-indigo-600 py-3 rounded-md mb-4"
      >
        <Text className="text-white text-center font-semibold text-sm">Confirm</Text>
      </TouchableOpacity>

      <View className="flex-row justify-center">
        <Text className="text-sm text-gray-600">Need to sign up again? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text className="text-sm text-indigo-600 font-semibold">Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConfirmCodeScreen;