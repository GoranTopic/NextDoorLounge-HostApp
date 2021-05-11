import * as React from 'react';
import Layout from '../constants/Layout';

const initialState  = {
		grid: [],
		tables: [],
		reservations: [],
		config: { 
			tableCount: 0,
			reservationCount: 0,
		}
}

const empty_sqr = { 
		sqrId: '', 
		table: 'none', 
		reservationID: '' } //Create grid data
for (let i = 0; i < Layout.squareNum; i++ ) initialState.grid.push({ ...empty_sqr, sqrId: i })


initialState.reservations = [ // data use to build for now
		{ id: 1,  tableID: '34', currentGuest: 0, name: 'Deloria King',   partySize: 4, arrivalTime: '9:00pm'  },
		{ id: 2,  tableID: '4B', currentGuest: 0, name: 'Anna Nazarijan', partySize: 4, arrivalTime: '9:00pm'  },
		{ id: 3,  tableID: '3B', currentGuest: 0, name: 'Naoma Silver',   partySize: 5, arrivalTime: '9:00pm'  },
		{ id: 4,  tableID: '4B', currentGuest: 0, name: 'Leslie Reyes',   partySize: 5, arrivalTime: '9:00pm'  },
		{ id: 5,  tableID: '20', currentGuest: 0, name: 'Ashley Vega',    partySize: 5, arrivalTime: '9:00pm'  },
		{ id: 6,  tableID: '26', currentGuest: 0, name: 'Gimena Lora',    partySize: 5, arrivalTime: '9:00pm'  },
		{ id: 7,  tableID: '34', currentGuest: 0, name: 'Oman Revolta',   partySize: 3, arrivalTime: '9:00pm'  },
		{ id: 8,  tableID: '34', currentGuest: 0, name: 'Deloria King',   partySize: 4, arrivalTime: '9:00pm'  },
		{ id: 9,  tableID: '4B', currentGuest: 0, name: 'Anna Nazarijan', partySize: 4, arrivalTime: '9:00pm'  },
		{ id: 10, tableID: '3B', currentGuest: 0, name: 'Naoma Silver',   partySize: 5, arrivalTime: '9:00pm'  },
		{ id: 11, tableID: '4B', currentGuest: 0, name: 'Leslie Reyes',   partySize: 5, arrivalTime: '9:00pm'  },
		{ id: 12, tableID: '20', currentGuest: 0, name: 'Ashley Vega',    partySize: 5, arrivalTime: '9:00pm'  },
		{ id: 13, tableID: '26', currentGuest: 0, name: 'Gimena Lora',    partySize: 5, arrivalTime: '9:00pm'  },
		{ id: 14, tableID: '34', currentGuest: 0, name: 'Oman Revolta',   partySize: 3, arrivalTime: '9:00pm'  },
];


const stateReducer = (state, action) => {
		switch (action.type) {
				case 'CREATE_RESERVATION':
						return {  // add a reservation to the list
								...state, 
								reservations:  [ ...state.reservations, { ...action.payload, id: state.reservations.length + 1 } ],
						};

				case 'UPDATE_RESERVATION':
						return { // probaly might not work, or just make a duplicate instead of an update
								...state,
								reservations: [ state.reservation.map( (reservation) => { 
										return reservation.id === action.payload.id? 
												action.payload
												: reservation 
								}) ],
						};

				case 'DELETE_RESERVATION':
						return {
								...state, ///might have to change the value to if it is not equal to 
								reservations: [ state.reservation.filter((reservation) =>  reservation.id !== action.payload.id) ],
						};

				case 'CREATE_TABLE_ON_GRID':
						return {
								...state, 
								grid:  [ ...state.grid.map( (gridSqr) => { 
										return gridSqr.sqrId === action.payload.sqrId ?
												action.payload
												: gridSqr
								})],
						};
				case 'UPDATE_TABLE_ON_GRID':
						return {
								...state, 
								grid:  [ ...state.grid.map( (gridSqr) => { 
										return gridSqr.sqrId === action.payload.sqrId ?
												action.payload
												: gridSqr
								})],
						};
				case 'DELETE_TABLE_ON_GRID':
						return {
								...state, 
								grid:  [ ...state.grid.map( (gridSqr) => { 
										return gridSqr.sqrId === action.payload.sqrId ?
												{ ...empty_sqr, sqrId: gridSqr.sqrId }
												: gridSqr
								})],
						};

				default:
						console.log('error: could not find dispatch command')
						return null;
		}

};

export { initialState, stateReducer };

