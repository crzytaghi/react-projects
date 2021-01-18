import React, { useEffect } from 'react'

const Alert = ({ show, msg, type, removeAlert, list }) => {

  // Call the useEffect hook to run the removeAlert function then clear it after 3 seconds. We then run our cleanup function to remove the setTimeout method from the memory.
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => {
      clearTimeout(timeout);
    }
  }, [list]);

  return <p className={`alert alert-${type}`} data-testid="alert">{msg}</p>
}

export default Alert;
