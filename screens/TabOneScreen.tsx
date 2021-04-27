import * as React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {

		const [text, setText] = useState('');
		return (
				<View style={styles.container}>
						<TextInput



				/>
				<Text style={styles.title}>Tab One</Text>
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

