import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { DraxProvider, DraxView } from 'react-native-drax';

const squareNum = 216; // magic number fo the number of squares
const ratio =  1.5; // magic number for the number ratio of the picture
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const gridWidth = windowWidth;
const gridHeight = gridWidth * ratio ;
const gridVol = gridWidth * gridHeight;
const squareVol = gridVol / squareNum;
const squareWidth  = (gridWidth / 12) - 0.1;
const squareHeight =  squareWidth;

//Create grid data
const GRID_DATA = [];
for (let i = 0; i < squareNum; i++ ) GRID_DATA.push({ sqrId: i, table: 'none',  })

export default function TabTwoScreen({ navigation }) {
		const [ grid, setGrid ] = React.useState([...GRID_DATA]);

		const [ isEditMode, setEditMode ] = React.useState(true);

		const createTableOnGrid = ( sqrId, table ) => setGrid([...grid, grid[sqrId].table = table ]);

		const eraseTable = ( sqrId ) =>  setGrid([...grid, grid[sqrId].table = 'none' ]);

		const renderSquares = ( sqr, index ) => {
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
				}
		}

		const toCreateTableScreen = ( sqrID, newTable )  => {
				navigation.navigate('updateTable',{
						id: sqrID, 
						newTable: newTable, 
						createTable: (sqrID, newTable ) => createTableOnGrid(sqrID, newTable),
				});
		}
	
		return (
				<DraxProvider>
						<View style={styles.gridContainer} >
								{ grid.map(renderSquares)}
						</View> 
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
				borderWidth: 0.2,
				borderColor: 'red',
				flexDirection: "row",
				flexWrap: "wrap",
				height: gridHeight,
				width: gridWidth,
		},
		square: {
			borderWidth: 0.2,
			//borderColor: 'white', // show the grid
			width: squareWidth,
			height: squareHeight,
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
			width: squareWidth,
			height: squareHeight,
		},
		circleTable: {
			borderWidth: 0.2,
			borderColor: 'white',
			borderRadius: 12,
			backgroundColor: 'rgba(255,255,255,0.8)',
			width: squareWidth,
			height: squareHeight,
		},
		longTableHorizontal: {
			borderWidth: 0.2,
			borderColor: 'white',
			backgroundColor: 'rgba(255,255,255,0.8)',
			borderRadius: 12,
			width: squareWidth * 2,
			height: squareHeight,
		},
		longTableVertical: {
			borderWidth: 0.2,
			borderColor: 'white',
			backgroundColor: 'rgba(255,255,255,0.8)',
			borderRadius: 12,
			width: squareWidth,
			height: squareHeight * 2,
		},
		optionsIcon: {
				alignSelf: 'center',
				textAlign: 'left',
		},
});

