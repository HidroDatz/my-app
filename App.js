import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router';

// This is the root component for Expo Router
export default function App() {
  const ctx = require.context('./app');
  return <ExpoRoot context={ctx} />;
}

registerRootComponent(App);