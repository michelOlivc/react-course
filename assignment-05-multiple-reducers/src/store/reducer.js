import * as actionTypes from './actions';

const initialState = {
  persons: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_PERSON:
      const newPerson = {
        id: Math.random(),
        name: 'Max',
        age: Math.floor(Math.random() * 40)
      }
      return {
        persons: state.persons.concat(newPerson)
      }
    case actionTypes.DELETE_PERSON:
      let newArray = [...state.persons];
      newArray = newArray.filter(person => person.id !== action.id)
      return {
        persons: newArray 
      }
    default:
      return state;
  }
}

export default reducer;