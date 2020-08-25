import data from '../components/rows.json'

const initialState = {
    data: data ,
}

export default function CustomersReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}