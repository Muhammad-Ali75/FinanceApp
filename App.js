import { SafeAreaProvider } from 'react-native-safe-area-context';

import NavContainer from './src/Screens/NavContainer';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavContainer />
    </SafeAreaProvider>
  );
}
