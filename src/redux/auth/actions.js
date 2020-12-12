import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_ERROR,
  REGISTER_USER_ERROR,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  REGISTER_USER_WITH_INFO,
  SET_STEP,
  SET_STEP3_ITEM,
  SET_STEP4_ITEM,
  SET_STEP5_ITEM,
  SET_STEP6_ITEM,
  SET_STEP7_ITEM,
} from '../actions';

export const loginUser = (user, history) => ({
  type: LOGIN_USER,
  payload: { user, history },
});
export const loginUserSuccess = (user) => ({
  type: LOGIN_USER_SUCCESS,
  payload: user,
});
export const loginUserError = (message) => ({
  type: LOGIN_USER_ERROR,
  payload: { message },
});

export const forgotPassword = (forgotUserMail, history) => ({
  type: FORGOT_PASSWORD,
  payload: { forgotUserMail, history },
});
export const forgotPasswordSuccess = (forgotUserMail) => ({
  type: FORGOT_PASSWORD_SUCCESS,
  payload: forgotUserMail,
});
export const forgotPasswordError = (message) => ({
  type: FORGOT_PASSWORD_ERROR,
  payload: { message },
});

export const resetPassword = ({ resetPasswordCode, newPassword, history }) => ({
  type: RESET_PASSWORD,
  payload: { resetPasswordCode, newPassword, history },
});
export const resetPasswordSuccess = (newPassword) => ({
  type: RESET_PASSWORD_SUCCESS,
  payload: newPassword,
});
export const resetPasswordError = (message) => ({
  type: RESET_PASSWORD_ERROR,
  payload: { message },
});

export const registerUser = (user, history) => ({
  type: REGISTER_USER,
  payload: { user, history },
});
export const registerUserSuccess = (user) => ({
  type: REGISTER_USER_SUCCESS,
  payload: user,
});
export const registerUserError = (message) => ({
  type: REGISTER_USER_ERROR,
  payload: { message },
});

export const logoutUser = (history) => ({
  type: LOGOUT_USER,
  payload: { history },
});

export const setStep = (item) => ({
  type: SET_STEP,
  payload: { item },
});

export const setStep3Item = (item) => ({
  type: SET_STEP3_ITEM,
  payload: { item },
});

export const setStep4Item = (item) => ({
  type: SET_STEP4_ITEM,
  payload: { item },
});

export const setStep5Item = (item) => ({
  type: SET_STEP5_ITEM,
  payload: { item },
});

export const setStep6Item = (item) => ({
  type: SET_STEP6_ITEM,
  payload: { item },
});

export const setStep7Item = (item) => ({
  type: SET_STEP7_ITEM,
  payload: { item },
});

export const registerUserWithInfo = (user, history) => ({
  type: REGISTER_USER_WITH_INFO,
  payload: { user, history },
});
