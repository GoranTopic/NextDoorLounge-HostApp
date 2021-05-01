import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} data={RESERVATION_DATA} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

const RESERVATION_DATA = [ // data use to build for now
		{ id: 1, table: '34', currentGuest: 0, name: 'Deloria King', partySize: 4, arrivalTime: '9:00pm'  },
		{ id: 2, table: '4B', currentGuest: 0, name: 'Anna Nazarijan', partySize: 4, arrivalTime: '9:00pm'  },
		{ id: 3, table: '3B', currentGuest: 0, name: 'Naoma Silver', partySize: 5, arrivalTime: '9:00pm'  },
		{ id: 4, table: '4B', currentGuest: 0, name: 'Leslie Reyes', partySize: 5, arrivalTime: '9:00pm'  },
		{ id: 5, table: '20', currentGuest: 0, name: 'Ashley Vega', partySize: 5, arrivalTime: '9:00pm'  },
		{ id: 6, table: '26', currentGuest: 0, name: 'Gimena Lora', partySize: 5, arrivalTime: '9:00pm'  },
		{ id: 7, table: '34', currentGuest: 0, name: 'Oman Revolta', partySize: 3, arrivalTime: '9:00pm'  },
		{ id: 8, table: '34', currentGuest: 0, name: 'Deloria King', partySize: 4, arrivalTime: '9:00pm'  },
		{ id: 9, table: '4B', currentGuest: 0, name: 'Anna Nazarijan', partySize: 4, arrivalTime: '9:00pm'  },
		{ id: 10, table: '3B', currentGuest: 0, name: 'Naoma Silver', partySize: 5, arrivalTime: '9:00pm'  },
		{ id: 11, table: '4B', currentGuest: 0, name: 'Leslie Reyes', partySize: 5, arrivalTime: '9:00pm'  },
		{ id: 12, table: '20', currentGuest: 0, name: 'Ashley Vega', partySize: 5, arrivalTime: '9:00pm'  },
		{ id: 13, table: '26', currentGuest: 0, name: 'Gimena Lora', partySize: 5, arrivalTime: '9:00pm'  },
		{ id: 14, table: '34', currentGuest: 0, name: 'Oman Revolta', partySize: 3, arrivalTime: '9:00pm'  },
];

