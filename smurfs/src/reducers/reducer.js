const initialState = {
    isLoading: false,
    smurfs: [  {
        name: 'Brainey',
        age: 200,
        height: '5cm',
        id: 0
      },  {
        name: 'Brainey',
        age: 200,
        height: '5cm',
        id: 0
      },  {
        name: 'Brainey',
        age: 200,
        height: '5cm',
        id: 0
      },  {
        name: 'Brainey',
        age: 200,
        height: '5cm',
        id: 0
      },  {
        name: 'Brainey',
        age: 200,
        height: '5cm',
        id: 0
      },  {
        name: 'Brainey',
        age: 200,
        height: '5cm',
        id: 0
      }]
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_START':
            return {
                ...state,
                isLoading: true
            }
        case 'FETCH_SUCCESS':
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload
            }
        default:
            return state;
    }
}