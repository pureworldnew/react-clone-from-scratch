import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGOUT_USER,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  REGISTER_USER_WITH_INFO,
  REGISTER_USER_WITH_INFO_SUCCESS,
  REGISTER_USER_WITH_INFO_ERROR,
} from '../actions';
import { getCurrentUser } from '../../helpers/Utils';

const INIT_STATE = {
  user: getCurrentUser(),
  forgotUserMail: '',
  newPassword: '',
  step: 1,
  step1Item: {},
  step3Item: '',
  step4Item: '',
  step5Item: '',
  step6Item: '',
  resetPasswordCode: '',
  loading: false,
  error: '',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload.uid, error: '' };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        loading: false,
        user: '',
        error: action.payload.message,
      };
    case FORGOT_PASSWORD:
      return { ...state, loading: true, error: '' };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        forgotUserMail: action.payload,
        error: '',
      };
    case FORGOT_PASSWORD_ERROR:
      return {
        ...state,
        loading: false,
        forgotUserMail: '',
        error: action.payload.message,
      };
    case RESET_PASSWORD:
      return { ...state, loading: true, error: '' };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        newPassword: action.payload,
        resetPasswordCode: '',
        error: '',
      };
    case RESET_PASSWORD_ERROR:
      return {
        ...state,
        loading: false,
        newPassword: '',
        resetPasswordCode: '',
        error: action.payload.message,
      };
    case REGISTER_USER:
      return { ...state, loading: true, error: '' };
    case REGISTER_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload.uid, error: '' };
    case REGISTER_USER_ERROR:
      return {
        ...state,
        loading: false,
        user: '',
        error: action.payload.message,
      };
    case LOGOUT_USER:
      return { ...state, user: null, error: '' };
    case REGISTER_USER_WITH_INFO:
      return { ...state, loading: true };
    case REGISTER_USER_WITH_INFO_SUCCESS:
      return { ...state, loading: false, user: action.payload.uid, error: '' };
    case REGISTER_USER_WITH_INFO_ERROR:
      return { ...state, loading: false, error: action.payload.message };
    default:
      return { ...state };
  }
};
