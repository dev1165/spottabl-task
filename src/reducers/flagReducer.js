import {
	TOGGLE_FLAG_A,
	TOGGLE_FLAG_B
} from "../actions";

export const flagAReducer = (state = false, action) => {
	switch (action.type) {
		case TOGGLE_FLAG_A:
			return action.payload;
		default:
			return state;
	}
};

export const flagBReducer = (state = false, action) => {
	switch (action.type) {
		case TOGGLE_FLAG_B:
			return action.payload;
		default:
			return state;
	}
};
