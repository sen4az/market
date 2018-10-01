const initialState = {
  isReady: false,
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ALBUMS':
      return {
        ...state,
        items: action.payload,
        isReady: true
      };
    case 'SET_IS_READY':
      return {
        ...state,
        isReady: action.payload
      }
      break;
    default:
      return state;
  }
}