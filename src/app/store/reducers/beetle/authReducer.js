export const SET_CURRENT_USER = "SET_CURRENT_USER";
const initialState = {
  isAuthenticated: false,
  user: {}
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: action.payload,
        user: action.payload
      };

    default:
      return state;
  }
};

export default authReducer;
