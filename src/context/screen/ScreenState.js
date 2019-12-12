import React, { useReducer } from 'react';
import ScreenContext from './screenContext';
import screenReducer from './screenReducer';
import { CHANGE_SCREEN } from '../types';

const ScreenState = props => {
  const { children } = props;

  const initState = null;
  const [state, dispatch] = useReducer(screenReducer, initState);

  const changeScreen = id => dispatch({ type: CHANGE_SCREEN, payload: id });

  return (
    <ScreenContext.Provider value={{ todoId: state, changeScreen }}>
      {children}
    </ScreenContext.Provider>
  );
};

export default ScreenState;
