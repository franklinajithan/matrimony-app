import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { getCurrentUser, signIn } from '@aws-amplify/auth';
import { useAuth } from 'contexts/AuthContext';

const SignInScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setUser } = useAuth(); // ✅ get context updater
  const isEmailValid = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const handleSignIn = async () => {
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
  
    if (!trimmedEmail || !trimmedPassword) {
      Alert.alert('Missing Fields', 'Please fill in all fields.');
      return;
    }
  
    if (!isEmailValid(trimmedEmail)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }
  
    setIsSubmitting(true);
  
    try {
      await signIn({ username: trimmedEmail, password: trimmedPassword });
  
      // ✅ Get authenticated user and update context
      const currentUser = await getCurrentUser();
      setUser(currentUser);
  
      Alert.alert('Signed In', 'Welcome back!');
      // ❌ Don't navigate manually — the AuthContext will trigger screen update
    } catch (error: any) {
      console.log('SIGN-IN ERROR →', JSON.stringify(error, null, 2)); // 💥 log full error
    
      const message =
        error?.message ||
        error?.errors?.[0]?.message ||
        error?.toString() ||
        'An unknown error occurred.';
    
      Alert.alert('Error', message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View className="flex-1 justify-center px-6 bg-white">
      <Text className="text-3xl font-extrabold text-center text-indigo-600 mb-2">💞 Cupid Knots</Text>
      <Text className="text-xl font-bold text-center text-gray-800 mb-8">Welcome Back</Text>

      <TextInput
        className="border border-gray-300 rounded-md px-4 py-3 mb-4 text-base"
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={setEmail}
        value={email}
      />

      <View className="relative mb-4">
        <TextInput
          className="border border-gray-300 rounded-md px-4 py-3 pr-12 text-base"
          placeholder="Password"
          secureTextEntry={secure}
          onChangeText={setPassword}
          value={password}
        />
        <TouchableOpacity
          onPress={() => setSecure(!secure)}
          className="absolute right-3 top-1/2 -translate-y-1/2"
        >
          <Ionicons name={secure ? 'eye-off' : 'eye'} size={22} color="gray" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={handleSignIn}
        disabled={isSubmitting}
        className={`py-3 rounded-md mb-4 ${isSubmitting ? 'bg-gray-400' : 'bg-indigo-600'}`}
      >
        <Text className="text-white text-center font-semibold text-base">
          {isSubmitting ? 'Signing In...' : 'Sign In'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text className="text-center text-sm text-indigo-500 mb-2">Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ConfirmCode')}>
        <Text className="text-center text-sm text-indigo-500 mb-6">Confirm Email?</Text>
      </TouchableOpacity>

      <View className="flex-row justify-center">
        <Text className="text-sm text-gray-600">Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text className="text-sm text-indigo-600 font-semibold">Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInScreen;
