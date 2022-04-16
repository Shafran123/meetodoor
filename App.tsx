import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { useFonts } from 'expo-font';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    Poppins: require('./assets/fonts/Poppins-Regular.ttf'),
    PoppinBold: require('./assets/fonts/Poppins-Bold.ttf'),
    PoppinSemiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
  });
  

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
