import * as types from '../constants';

export const addTerminal = (name, description) => {
    return {
        type: types.TERMINAL_ITEM_ADD,
        payload: {
            name,
            description,
            id: Date.now()
        }
    }
}

export function deleteItem(terminalItem) {
    return {
        type: types.TERMINAL_ITEM_DELETE,
        payload: terminalItem
    }
}
