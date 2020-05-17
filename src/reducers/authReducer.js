const INITAL_STATE = {
  isSignedIn: null,
  userId: null,
};

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return { isSignedIn: true, userId: action.payload };
    case 'SIGN_OUT':
      return { isSignedIn: false, userId: null };
  }
  return state;
};
