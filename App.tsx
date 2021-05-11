import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { stateReducer, initialState } from './reducer/state';

export default function App() {
		const [state, dispatch] = React.useReducer(stateReducer, initialState);
		const StateContext = React.createContext();
		const DispatchContext = React.createContext();
		const isLoadingComplete = useCachedResources();
		const colorScheme = useColorScheme();

		if (!isLoadingComplete) {
				return null;
		} else {
				return (
						<DispatchContext.Provider value={dispatch}>
								<StateContext.Provider value={state}>
										<SafeAreaProvider>
												<Navigation colorScheme={colorScheme} />
												<StatusBar />
										</SafeAreaProvider>
								</StateContext.Provider>
						</DispatchContext.Provider>
				);
		}
}

