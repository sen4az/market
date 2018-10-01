const initialState = {
  albums: [
    {
      id: 1,
      title: 'Nevermind'
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_ALBUMS":
      return {
        ...state,
        albums: action.payload
      };
    case "ADD_ALBUMS":
      return {
        ...state,
        albums: [
        ...state.albums,
        action.payload
      ]
    };
    default:
      return state;
  }
}