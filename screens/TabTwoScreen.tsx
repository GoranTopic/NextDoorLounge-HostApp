import * as React from 'react';
import { Button, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Table from '../components/Table';
import Untitled from '../assets/images/Untitled.png';
import Layout from '../constants/Layout';
import { DraxProvider, DraxView } from 'react-native-drax';

export default function TabTwoScreen({ state, dispatch, route, navigation }) {

		const [ localGrid, setGrid ] = React.useState([]);

		const [ isEditMode, setEditMode ] = React.useState(false);

		const toggleEditMode = () => setEditMode(!isEditMode);
		
		const EditButton = () => { 
				if(isEditMode){
						return <Button onPress={toggleEditMode} title="Done" />
				}else{
						return <Button onPress={toggleEditMode} title="Edit" />
				}
		}
		
		React.useLayoutEffect(() => {
				navigation.setOptions({
						headerRight: EditButton 
				});
		}, [navigation, toggleEditMode]);

		const renderSqrs = ( sqr, index) => {
				return (route.params && sqr.sqrID === route.params.sqrID)?
				<View style={styles.highlight} key={index}>
						<Table 
								sqr={sqr} 
								key={index} 
								isEditMode={isEditMode} 
								toCreateTableScreen={toCreateTableScreen} 
								navigation={navigation} /> 
				</View>
						:
				<Table 
						sqr={sqr} 
						key={index} 
						isEditMode={isEditMode} 
						toCreateTableScreen={toCreateTableScreen} 
						navigation={navigation} /> 
		}

		const eraseTable = ( sqr ) =>  dispatch({ 
				type: 'DELETE_TABLE_ON_GRID',
				payload: { table: sqr },
		});

		const toCreateTableScreen = ( sqrData, newTable ) => {
				navigation.navigate('UpdateTableScreen',{
						sqr: sqrData, 
						newTable: newTable, 
						isUpdating: false,
				});
		}


		const getGridStyle = () => isEditMode? { ...styles.gridContainer, ...styles.gridEditMode }: { ...styles.gridContainer }


		return (
				<DraxProvider>
						<ImageBackground style={styles.backgroundImage } source={Untitled} >
								<View style={ getGridStyle() }>
										{ state.grid.map(renderSqrs)}
								</View> 
						</ImageBackground>
						{ isEditMode && 
						<View style={styles.newTableContainer}>
								<DraxView style={styles.squareTable} payload="sqrTable" />
								<DraxView style={styles.circleTable} payload="circleTable" />
								<DraxView 
										renderContent={() => 
										<Ionicons name={'trash-outline'} color={'red'} size={35} style={styles.optionsIcon} />}
												onReceiveDragDrop={({ dragged: { payload } }) => {
														console.log(`received ${payload}`);
														eraseTable(state.grid[payload]);
												}}
										/>
								</View>
						}
				</DraxProvider>
		);
}

const styles = StyleSheet.create({
		container: {
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
		},
		gridContainer: {
				backgroundColor: 'transparent',
				flexDirection: "row",
				flexWrap: "wrap",
				height: Layout.gridHeight,
				width: Layout.gridWidth,
		},
		gridEditMode:{  
				borderWidth: 0.5,
				borderColor: 'red',
		},
		square: {
				borderWidth: 0.2,
				borderColor: 'white', // show the grid
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
		backgroundImage: {
		},
		highlight: {
				backgroundColor: 'rgba(255, 255, 255, 0.9)',
				overflow: 'visible',
		}
});

