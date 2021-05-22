/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import UpdateTableScreen from '../screens/UpdateTableScreen';
import DetailTableScreen from '../screens/DetailTableScreen';
import DetailReservationScreen from '../screens/DetailReservationScreen';
import UpdateReservationScreen from '../screens/UpdateReservationScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList, TabThreeParamList } from '../types';
import { Provider, connect  } from 'react-redux';
import { createStore, } from 'redux';
import { stateReducer, initialState } from '../reducer/state';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const store = createStore(stateReducer, initialState);
// create a store container for tab screen one
const TabOneStoreContainer = connect(state => ({ state: state }))(TabOneScreen);
// create a store container for tab screen two
const TabTwoStoreContainer = connect(state => ({ state: state }))(TabTwoScreen);
// create a store container for tab screen three
const TabThreeStoreContainer = connect(state => ({ state: state }))(TabThreeScreen);

// create a store container for update table
const UpdateTableStoreContainer = connect()(UpdateTableScreen);
// create a store container for detail tables
const DetailTableStoreContainer = connect(state => ({state: state}))(DetailTableScreen);

// create a store container for update Reservatinos
const UpdateReservationStoreContainer = connect(state => ({state: state}))(UpdateReservationScreen);
// create a store container for detail reservations
const DetailReservationStoreContainer = connect(state => ({state: state}))(DetailReservationScreen);

export default function BottomTabNavigator() {
		const colorScheme = useColorScheme();
		return (
				<Provider store={store}>
						<BottomTab.Navigator
								initialRouteName="TabOne"
								tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
								<BottomTab.Screen
										name="Search"
										component={TabOneNavigator}
										options={{
												tabBarIcon: ({ color }) => <TabBarIcon name="search-sharp" color={color} />,
										}}
								/>
								<BottomTab.Screen
										name="Layout"
										component={TabTwoNavigator}
										options={{
												tabBarIcon: ({ color }) => <TabBarIcon name="md-apps-sharp" color={color} />,
										}}
								/>
								<BottomTab.Screen
										name="Info"
										component={TabThreeNavigator}
										options={{
												tabBarIcon: ({ color }) => <TabBarIcon name="ios-information" color={color} />,
										}}
								/>
						</BottomTab.Navigator>
				</Provider>
		);
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
		return (
				<TabOneStack.Navigator>
						<TabOneStack.Screen
								name="TabOneScreen"
								component={TabOneStoreContainer}
								options={{ headerTitle: 'Reservations' }}
						/>
						<TabOneStack.Screen
								name="UpdateReservationScreen"
								component={UpdateReservationStoreContainer}
								options={{ headerTitle: 'Reservations' }}
						/>
						<TabOneStack.Screen
								name="DetailReservationScreen"
								component={DetailReservationStoreContainer}
								options={{ headerTitle: 'Reservation' }}
						/>
				</TabOneStack.Navigator>
		);
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
		return (
				<TabTwoStack.Navigator>
						<TabTwoStack.Screen
								name="TabTwoScreen"
								component={TabTwoStoreContainer}
								options={({ navigation, route  }) => ({
										headerTitle: 'Tables',
								})}
						/>
						<TabTwoStack.Screen
								name="UpdateTableScreen"
								component={UpdateTableStoreContainer}
								options={{ headerTitle: 'Edit Table' }}
						/>
						<TabTwoStack.Screen
								name="DetailTableScreen"
								component={DetailTableStoreContainer}
								options={{ headerTitle: 'Table' }}
						/>
				</TabTwoStack.Navigator>
		);
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
		return (
				<TabThreeStack.Navigator>
						<TabThreeStack.Screen
								name="TabThreeScreen"
								component={TabThreeStoreContainer}
								options={({ navigation, route }) => ({
										headerTitle: 'Logs',
								})}
						/>
				</TabThreeStack.Navigator>
		);
}

