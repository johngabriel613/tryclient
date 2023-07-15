import React, { createContext, useContext, useState } from "react";

const ToastContext = createContext();

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
}

export function ToastProvider({ children }) {
  const [toastMessage, setToastMessage] = useState(null);

  const clearToastMessage = () => {
    setToastMessage(null);
  };

  const toast = {
    toastMessage,
    setToastMessage,
    clearToastMessage,
  };

  return (
    <ToastContext.Provider value={toast}>
      {children}
    </ToastContext.Provider>
  );
}