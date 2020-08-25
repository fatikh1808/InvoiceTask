import * as types from '../constants';

const initialState = {
    terminalItems: []
};


export default function TerminalReducer(state = initialState, action) {
    switch (action.type) {
        case types.TERMINAL_ITEM_ADD:
            return {...state.terminalItems, terminalItems: [...state.terminalItems, action.payload]};

        case types.TERMINAL_ITEM_DELETE: {
            return {...state.terminalItems, terminalItems: action.payload}
            // let toolId = action.payload.id;
            //
            // let newTools = state.terminalItems.filter(function (action) {
            //     return action.id !== toolId;
            // });
            // return {terminalItems: newTools}
        }

        default:
            return state
    }

}