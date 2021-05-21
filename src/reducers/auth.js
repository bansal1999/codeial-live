import React from "react";

const initialAuthState = {
  user: {},
  error: null,
  isloggedin: false,
  isProgress: false,
};

export default function auth(state = initialAuthState, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isProgress: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        isloggedin: true,
        isProgress: false,
        error: null,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isProgress: true,
        error: action.error,
      };

    default:
      return state;
  }
}
