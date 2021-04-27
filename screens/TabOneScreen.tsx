import * as React from 'react';
import { StyleSheet } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, TextInput } from '../components/Themed';

export default function TabOneScreen() {
		const [text, setText] = React.useState('');
		return (
				<View style={styles.container}>
						<Text style={styles.title}>Customers</Text>
						<TextInput
								style={styles.searchInput}
								placeholder="Search customer"
								placeholderTextColor="gray"
								onChangeText={text => setText(text)}
								defaultValue={text}
						/>
						<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
						<EditScreenInfo path="/screens/TabOneScreen.tsx" />
				</View>
		);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
	searchInput: {
		width: "80%",
		margin: 20,
		padding: 10,
		color: 'white',
		borderColor: 'gold',
		borderWidth: 0.2,
		borderRadius: 5,
		},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

const USERS = [
		  { id: 1, name: 'Andy', age: 32  },
		  { id: 2, name: 'Bob', age: 30  },
		  { id: 3, name: 'Tom Hulk', age: 40  },
		  { id: 4, name: 'Tom Hank', age: 50  },
		  { id: 5, name: 'Audra', age: 30  },
		  { id: 6, name: 'Anna', age: 68  },
		  { id: 7, name: 'Tom', age: 34  },
		  { id: 8, name: 'Tom Riddle', age: 28  },
		  { id: 9, name: 'Bolo', age: 23  },
		
];

