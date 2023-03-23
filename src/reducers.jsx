import { combineReducers } from "redux";
const initialState = {
	mode: false,
};

const reducers = (state = initialState, action) => {
	switch (action.type) {
		case "TOGGLE": {
			return { mode: !state.mode };
		}
		default: {
			return state;
		}
	}
};
export default reducers;

export const combineReducer = combineReducers({ reducers });
