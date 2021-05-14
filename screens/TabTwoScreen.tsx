import * as React from 'react';
import { ImageBackground, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Table from '../components/Table';
import Untitled from '../assets/images/Untitled.png';
import Layout from '../constants/Layout';
import { DraxProvider, DraxView } from 'react-native-drax';


export default function TabTwoScreen({ state, dispatch, navigation }) {
		//console.log("printing grid from tab two screen")
		//console.log(state.grid)

		const [ localGrid, setGrid ] = React.useState([]);

		const [ isEditMode, setEditMode ] = React.useState(true);

		const eraseTable = ( sqrID ) =>  dispatch({ 
				type: 'DELETE_TABLE_ON_GRID',
				payload: { sqrID : sqrID },
		});

		const toCreateTableScreen = ( sqrData, newTable ) => {
				navigation.navigate('updateTable',{
						sqr: sqrData, 
						newTable: newTable, 
				});
		}
	
		return (
				<DraxProvider>
						<ImageBackground style={styles.backgroundImage } source={Untitled} >
								<View style={styles.gridContainer} >
										{ state.grid.map((sqr, index) => <Table 
												sqr={sqr} 
												key={index} 
												isEditMode={isEditMode} 
												toCreateTableScreen={toCreateTableScreen} />
								)}
						</View> 
				</ImageBackground>
				<View style={styles.newTableContainer}>
						<DraxView style={styles.squareTable}
								payload="sqrTable"
						/>
						<DraxView style={styles.circleTable}
								payload="circleTable"
						/>
						<DraxView style={styles.longTableHorizontal}
								payload="longTableHorizontal"
						/>
						<DraxView style={styles.longTableVertical}
								payload="longTableVertical"
						/>
						<DraxView 
								renderContent={() => 
								<Ionicons name={'trash-outline'} color={'red'} size={35} style={styles.optionsIcon} />}
										onReceiveDragDrop={({ dragged: { payload } }) => {
												console.log(`received ${payload}`);
												eraseTable(payload);
										}}
								/>
						</View>
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
});

