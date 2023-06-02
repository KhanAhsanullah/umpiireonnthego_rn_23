export const selectUserState = state => state.UserReducer;
export const selectUser = state => state.UserReducer.user;
export const selectUserType = state => state.UserReducer.userType;
export const selectUserServices = state => state.UserReducer.services;
export const selectNotifications = state => state.UserReducer.notifications;
export const selectWallet = state => state.UserReducer.wallet;
export const selectCards = state => state.UserReducer.cards;
export const selectAccount = state => state.UserReducer.account;
