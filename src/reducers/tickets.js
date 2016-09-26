const tickets = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TODOS_SUCCESS':
      return [ 
        ...state,
        ...action.response
      ]
    default:
      return state
  }
}

export default tickets
