export const GET_CARDS = 'GET_CARDS';
export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';

export const getCardsAction = () => ({type: GET_CARDS});
export const addCardAction = payload => ({type: ADD_CARD, payload});
export const deleteCardAction = payload => ({type: DELETE_CARD, payload});
