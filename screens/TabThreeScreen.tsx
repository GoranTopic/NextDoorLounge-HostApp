		paddingLeft: 15,
		paddingTop: '6%',
								defaultValue={text}
				dispatch({
						<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
		width: "95%",
    justifyContent: 'center',
    fontWeight: 'bold',
	dot:{
    flex: 1,
								renderItem={ 
			margin:5
	searchInput: {
		
import Reservation from '../components/Reservation';
});
		}
						type: 'ADD_LOG',
			padding: 3,
						<FlatList
    height: 1,
				});
	eventContainer:{
const styles = StyleSheet.create({
    fontSize: 11,
			borderRadius: 8,
			borderWidth: 0.2,
						</View>
		return (
			borderColor: 'gold',
			height: 10,
		margin: 5,
				setText('');
	},
	},
	},
	},
		borderWidth: 0.2,
			marginVertical: 5,
	text:{
import * as React from 'react';
		color: 'white',
								onSubmitEditing={handleSubmit}
}
import EditScreenInfo from '../components/EditScreenInfo';
								placeholder="Message..."
						payload:{ log: text, },
		const [ text, setText ] = React.useState('');
			fontSize: 14,
		const handleSubmit = () => { 
import { Text, View, TextInput } from '../components/Themed';
						/>
		const handleSeachInput = (text)=>  setText(text); 
			width: 10,
								data={ state.logger }
	separator: {
										({item}) =>  
		alignSelf: 'center',
		alignSelf: 'center',
		alignSelf: 'center',
												style={styles.eventContainer} >
			alignSelf: 'flex-start',
    width: '100%',
								onChangeText={handleSeachInput}
		paddingRight: 15,
		borderBottomColor: 'gold',
export default function TabThreeScreen({ state, dispatch, navigation }) {
								styles={styles.reservList}
				<View style={styles.container}>
		paddingVertical: 3,
								style={styles.searchInput}
			backgroundColor: 'white'







								</View>
import { Button, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
  container: {
										<Text style={styles.text}>{item}</Text>
  },
  },
  },
								placeholderTextColor="gray"
		);
						<TextInput
										<View key={item}
			borderRadius: 30,
  title: {
								keyExtractor={(item, index) => index.toString()}
						}/>
