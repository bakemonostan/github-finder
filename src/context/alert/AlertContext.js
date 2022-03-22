import { createContext, useReducer } from 'react';
import alertReducer from './AlertReducer';

// * Create a Context provider that would wrap components
const AlertContext = createContext();

// provider function, dont forget to export it
export const AlertProvider = ({ children }) => {
  const initialState = null;

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Set an Alert
  const setAlert = (msg, type) => {
    dispatch({
      type: 'SET_ALERT',
      payload: {
        msg,
        type,
      },
    });

    setTimeout(() => dispatch({ type: 'REMOVE_ALERT' }), 3000);
  };

  // return the context provider
  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
