const initialState = {
  isLoading: false,
  smurfs: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        isLoading: true
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload
      };
    case "POST_START":
      return {
        ...state,
        isLoading: true
      };
    case "POST_SUCCESS":
        return {
            ...state,
            isLoading: false,
            smurfs: action.payload
        }
    default:
      return state;
  }
};
