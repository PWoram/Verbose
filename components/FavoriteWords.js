const randomID = () => Math.random().toString();

const createItem = (word) => ({ id: randomID(), word });

const types = {
	ADD: 'ADD',
	REMOVE: 'REMOVE',
};

export const actionCreators = {
	add: (word) => ({ type: types.ADD, payload: createItem(word) }),
	remove: (id) => ({ type: types.REMOVE, payload: id }),
};

export const initialState = {
	items: [createItem('verbose')],
};

export function reducer(state, action) {
	switch (action.type) {
		case types.ADD:
			return { ...state, items: [...state.items, action.payload] };
		case types.REMOVE:
			return {
				...state,
				items: state.items.filter((item) => item.id !== action.payload),
			};
	}
}
