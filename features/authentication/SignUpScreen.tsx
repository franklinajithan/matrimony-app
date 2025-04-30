// 📁 features/authentication/SignUpScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { signUp } from '@aws-amplify/auth';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    if (!email || !password) {
      Alert.alert('Validation Error', 'Please enter both email and password.');
      return;
    }

    try {
      const result = await signUp({
        username: email,
        password: password,
        options: {
          userAttributes: {
            email: email,
          },
        },
      });
      console.log('Signup success:', result);
      Alert.alert('Success', 'Confirmation code sent to your email.');
      navigation.navigate('ConfirmCode');
    } catch (error: any) {
      console.error('Signup error:', error);
      Alert.alert('Error', error.message || 'Signup failed');
    }
  };

  return (
    <View className="flex-1 justify-center px-6 bg-white">
      <Text className="text-3xl font-extrabold text-center text-indigo-600 mb-2">💞 Cupid Knots</Text>
      <Text className="text-xl font-bold text-center text-gray-800 mb-8">Create Your Account</Text>

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
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />

      <TouchableOpacity
        onPress={handleSignUp}
        className="bg-indigo-600 py-3 rounded-md mb-4"
      >
        <Text className="text-white text-center font-semibold text-sm">Sign Up</Text>
      </TouchableOpacity>

      <View className="flex-row justify-center">
        <Text className="text-sm text-gray-600">Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text className="text-sm text-indigo-600 font-semibold">Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;
