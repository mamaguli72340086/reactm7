// src/reducers/userReducer.js
const initialState = {
    username: '',
    email: '',
    password: '',
    isAuthenticated: false
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                username: action.payload.username,
                email: action.payload.email,
                password: action.payload.password,
                isAuthenticated: true
            };
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
};

export default userReducer;
