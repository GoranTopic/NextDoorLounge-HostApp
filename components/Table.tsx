import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import useColorScheme from '../hooks/useColorScheme';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Layout from '../constants/Layout';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { DraxProvider, DraxView } from 'react-native-drax';

export default function Table( sqr, index: 0, isEditMode: false, toCreateTableScreen: null ) {
		if (isEditMode){ 	
				switch(sqr.table){  
						case 'sqrTable':
						return <DraxView 
								payload={index}
								key={index}
								style={ styles.squareTable } /> ;
						case 'circleTable':
						return <DraxView
								payload={index}
								key={index}
								style={ styles.circleTable } />;
						case 'longTableHorizontal':
						return <DraxView 
								payload={index}
								key={index}
								style={ styles.longTableHorizontal } />;
						case 'longTableVertical':
						return <DraxView 
								payload={index}
								key={index}
								style={ styles.longTableVertical } />;
						default:
						return <DraxView 
								key={index}
								style={styles.square}
								onReceiveDragDrop={({ dragged: { payload } }) => {
										console.log(`placing ${payload}`);
										toCreateTableScreen(sqr, payload);
								}}/>
						}
		} else { 
				switch(sqr.table){  
						case 'sqrTable':
						return <View 
								key={index}
								style={ styles.squareTable } /> ;
						case 'circleTable':
						return <View
								key={index}
								style={ styles.circleTable } />;
						case 'longTableHorizontal':
						return <View 
								key={index}
								style={ styles.longTableHorizontal } />;
						case 'longTableVertical':
						return <View 
								key={index}
								style={ styles.longTableVertical } />;
						default:
						return <View 
								style={styles.square} 
						/>
				}
		}
}

const styles = StyleSheet.create({
		container: {
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
		},
		gridContainer: {
				borderWidth: 0.2,
				borderColor: 'red',
				flexDirection: "row",
				flexWrap: "wrap",
				height: Layout.gridHeight,
				width: Layout.gridWidth,
		},
		square: {
			borderWidth: 0.2,
			//borderColor: 'white', // show the grid
			width: Layout.squareWidth,
			height: Layout.squareHeight,
		},
		draggable: {
				width: 100,
				height: 100,
				backgroundColor: 'blue',
		},
		receiver: {
				width: 100,
				height: 100,
				backgroundColor: 'green',
		},
		newTableContainer: {
				height: '100%',
				width: 'auto',
				backgroundColor: 'rgba(123,123,123,0.2)',
				flex: 1,
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
				paddingHorizontal: 20,
		},
		squareTable: {
			borderWidth: 0.2,
			borderColor: 'white',
			backgroundColor: 'rgba(255,255,255,0.8)',
			borderRadius: 2,
			width: Layout.squareWidth,
			height: Layout.squareHeight,
		},
		circleTable: {
			borderWidth: 0.2,
			borderColor: 'white',
			borderRadius: 12,
			backgroundColor: 'rgba(255,255,255,0.8)',
			width: Layout.squareWidth,
			height: Layout.squareHeight,
		},
		longTableHorizontal: {
			borderWidth: 0.2,
			borderColor: 'white',
			backgroundColor: 'rgba(255,255,255,0.8)',
			borderRadius: 12,
			width: Layout.squareWidth * 2,
			height: Layout.squareHeight,
		},
		longTableVertical: {
			borderWidth: 0.2,
			borderColor: 'white',
			backgroundColor: 'rgba(255,255,255,0.8)',
			borderRadius: 12,
			width: Layout.squareWidth,
			height: Layout.squareHeight * 2,
		},
		optionsIcon: {
				alignSelf: 'center',
				textAlign: 'left',
		},
});


