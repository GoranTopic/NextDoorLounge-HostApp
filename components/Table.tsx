import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import useColorScheme from '../hooks/useColorScheme';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { DraxProvider, DraxView } from 'react-native-drax';

export default function Table( sqr, index, isEditMode: false ) {
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
										toCreateTableScreen(index, payload);
								}}/>
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
				alignItems: 'center',
				justifyContent: 'center',
		},
		tableBox: {
				alignSelf: 'center',
				alignItems: 'center',
				justifyContent: 'center',
				borderColor: 'green',
				borderWidth: 0.5,
				borderRadius: 5,
				marginRight: 15,
				height: 25,
				width: 25,
		},
		tableText:{
				color: 'green',
		},
		resevation:{
				alignSelf: 'center',
				borderColor: 'gray',
				borderWidth: 0.2,
				borderRadius: 2,
				width: "85%",
				paddingHorizontal: 10,
				paddingVertical: 10, 
				marginVertical: 4,
				display: 'flex',
				shadowColor: 'rgba(100, 100, 100, 0.2)',
				shadowOffset: {
						width: 0,
						height: -3,
				},
				shadowRadius: 5,
				flexDirection: "row",
				justifyContent: 'space-between',
				alignItems: 'center',
		},
		resevationEditMode:{
				alignSelf: 'center',
				borderColor: 'red',
				borderWidth: 0.2,
				borderRadius: 2,
				width: "85%",
				paddingHorizontal: 10,
				paddingVertical: 10, 
				marginVertical: 4,
				display: 'flex',
				shadowColor: 'rgba(100, 100, 100, 0.2)',
				shadowOffset: {
						width: 0,
						height: -3,
				},
				shadowRadius: 5,
				flexDirection: "row",
				justifyContent: 'space-between',
				alignItems: 'center',
		},
		name: {
				color: 'white',
				alignSelf: 'center',
		},
		party: {
				fontSize: 12,
				color: 'gray',
				alignSelf: 'center',
		},
		arrival: {
				fontSize: 12,
				color: 'gray',
				alignSelf: 'center',
				textAlign: 'left',
		},
		optionsIcon: {
				alignSelf: 'center',
				textAlign: 'left',
		},
});

