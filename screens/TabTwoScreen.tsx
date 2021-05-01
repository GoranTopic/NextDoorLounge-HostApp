import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { DraxProvider, DraxView } from 'react-native-drax';

const squareNum = 250;
const ratio =  1.6;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const gridWidth = 410;
const gridHeight = gridWidth * ratio ;
const gridVol = gridWidth * gridHeight;
const squareVol = gridVol / squareNum;
const squareWidth  = Math.sqrt(squareVol);
//const roundedSquareWidth = 
const squareHeight =  squareWidth;


export default function TabTwoScreen() {
		
		console.log("height:")
		console.log(gridHeight)
		console.log("width:")
		console.log(gridWidth);
		console.log("squareWidth:")
		console.log(squareWidth)

		//const [ grid, setGird ] = React.useState([...Array(72)].map((value, index) => { id: index, }));

		const [ isEditMode, setEditMode ] = React.useState('false');

		return (
				<DraxProvider>
						<DraxView style={styles.gridContainer} >
								{ [...Array(squareNum)].map(() => 
								<View style={styles.square}
										onReceiveDragEnter={({ dragged: { payload  }  }) => {
												console.log(`hello ${payload}`);
										}}
								/>
						)}
				</DraxView> 
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
			borderColor: 'white',
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
});

