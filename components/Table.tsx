import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import useColorScheme from '../hooks/useColorScheme';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Layout from '../constants/Layout';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { DraxProvider, DraxView } from 'react-native-drax';

const waitersColors = [
		{ waiter: 'Melissa', color: 'red' },
		{ waiter: 'Jennifer', color: 'blue' },
		{ waiter: 'Cassadra', color: 'green' },
		{ waiter: 'Selina', color: 'pink' },
		{ waiter: 'Jake', color: 'purple' },
]

const getWaiterColor = (waiter) => {
		try{  
				let color = waitersColors.filter(value => value.waiter === waiter )[0].color;
				return color;
		}catch( e ){
				//console.log(e); // if waiter was not found return white color
				return 'white';
		}
}


export default function Table({ sqr, index, reservation, isEditMode, toCreateTableScreen }){
		//console.log(reservation);
		if( typeof index === 'undefined' ) index = 0 ;
		if( typeof reservation === 'undefined' ) reservation = { vip: null };
		if( typeof isEditMode === 'undefined' )  isEditMode = false;
		if( typeof toCreateTableScreen === 'undefined') toCreateTableScreen = null;
	
		const getTableStyle = tableType => { switch(tableType){  
				case 'sqrTable':
					return styles.squareTable;
				case 'circleTable':
					return styles.circleTable; 
				case 'longTableHorizontal':
					return styles.longTableHorizontal;
				case 'longTableVertical':
					return styles.longTableVertical;
				default:
					return styles.square;
		}}
		
		const getNameStyle = (name) => { return name !== ''? { backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' } : {}  }

		const getVipStyle = (vip) => { return vip? { borderColor: 'gold', borderWidth: 1 } : {}  }

		const InsideName = (name) => name !== ''? <Text style={{...getColorStyle(sqr.waiter), ...styles.insideName,  } }>{name}</Text> : <></> 

		const getColorStyle = waiter => { 
				return { 
						color: getWaiterColor(waiter), 
						backgroundColor: getWaiterColor(waiter), 
						borderColor: getWaiterColor(waiter)
				}
		}

		const StyleSquare = (sqr) => { // gets all the styles for a possible square
				return { ...getTableStyle(sqr.table), 
						...getColorStyle(sqr.waiter),
						...getNameStyle(sqr.name),
						...getVipStyle(reservation.vip) 
				} 
		}


		const renderTable = () => { 
				if(isEditMode){  
						return sqr.table !== 'none'? // if is not empty table
						<DraxView 
								payload={index}
								key={index}
								style={  StyleSquare(sqr)  }>
								{ InsideName(sqr.name) }
						</DraxView>
								: <DraxView  // if it is empty, render a black square
										payload={index}
										key={index}
										style={getTableStyle(sqr.table)}
										onReceiveDragDrop={({ dragged: { payload } }) => {
												toCreateTableScreen(sqr, payload);} }> 
										</DraxView>
				}else{
						return <View 
								key={index}
								style={ StyleSquare(sqr) }> 
								{ InsideName(sqr.name) }
						</View>
				}
		}

		return renderTable();

}

const styles = StyleSheet.create({
		insideName:{
				backgroundColor: 'transparent',
		},
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
				//borderWidth: 0.2,
				//borderColor: 'white', // show the grid
			backgroundColor: 'transparent',
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
			borderRadius: 15,
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


