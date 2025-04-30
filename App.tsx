import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';
import './global.css';
import { AuthProvider } from 'contexts/AuthContext';
import MainNavigator from 'navigation/MainNavigator';
import 'react-native-get-random-values';

Amplify.configure(awsconfig); // ✅ No { Auth } needed in Amplify v6+

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <MainNavigator />
        <StatusBar style="dark" />
      </AuthProvider>
    </SafeAreaProvider>
  );
}
