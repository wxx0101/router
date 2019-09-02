import { createStore } from "redux"

const reducer = (state = {number: 99}, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    return newState;
    
}


const store = createStore(reducer)

export default store; 