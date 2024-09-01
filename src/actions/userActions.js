// src/actions/userActions.js
export const setUser = (username, email, password) => ({
    type: 'SET_USER',
    payload: { username, email, password }
});

export const logout = () => ({
    type: 'LOGOUT'
});
