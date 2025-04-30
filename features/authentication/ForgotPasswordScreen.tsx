// 📁 features/authentication/ForgotPasswordScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { Auth } from 'aws-amplify';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [step, setStep] = useState(1);

  const handleRequestCode = async () => {
    try {
      await Auth.forgotPassword({ username: email });
      setStep(2);
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Failed to send reset code');
    }
  };

  const handleResetPassword = async () => {
    try {
      await Auth.forgotPasswordSubmit({ username: email, confirmationCode: code, newPassword });
      Alert.alert('Password Reset', 'You can now sign in.');
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Password reset failed');
    }
  };

  return (
    <View className="p-4">
      <Text className="text-xl font-bold mb-4">Forgot Password</Text>
      <TextInput
        className="border p-2 mb-2"
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        autoCapitalize="none"
      />

      {step === 1 ? (
        <Button title="Send Reset Code" onPress={handleRequestCode} />
      ) : (
        <>
          <TextInput
            className="border p-2 mb-2"
            placeholder="Code"
            onChangeText={setCode}
            value={code}
            keyboardType="numeric"
          />
          <TextInput
            className="border p-2 mb-2"
            placeholder="New Password"
            secureTextEntry
            onChangeText={setNewPassword}
            value={newPassword}
          />
          <Button title="Reset Password" onPress={handleResetPassword} />
        </>
      )}
    </View>
  );
};

export default ForgotPasswordScreen;
