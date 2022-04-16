/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import { Chart, Folder, Graph, Home, Setting } from 'react-native-iconly';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import StockScreen from '../screens/StockScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ShowDetailScreen from '../screens/ShoeDetailScreen';

export default function Navigation() {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack:any = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
      <Stack.Screen name="ScreenTwo" component={ShowDetailScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const BottomTab:any = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          headerShown:false,
          tabBarShowLabel:false,
          tabBarIcon: ({ color }) =>  <Home set="bold" stroke='bold' primaryColor={color} />,
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={ProductsScreen}
        options={{
          headerShown:false,
          tabBarShowLabel:false,
          tabBarIcon: ({ color }) => <Folder set="bold" stroke='bold' primaryColor={color} />,
        }}
      />
         <BottomTab.Screen
        name="TabThree"
        component={StockScreen}
        options={{
          headerShown:false,
          tabBarShowLabel:false, 
          tabBarIcon: ({ color }) => <Chart set="bold" stroke='bold' primaryColor={color}/>,
        }}
      />
        <BottomTab.Screen
        name="TabFour"
        component={SettingsScreen}
        options={{
          headerShown:false,
          tabBarShowLabel:false,
          tabBarIcon: ({ color }) => <Setting set="bold" stroke='bold' primaryColor={color}/>,
        }}
      />
    </BottomTab.Navigator>
  );
}
