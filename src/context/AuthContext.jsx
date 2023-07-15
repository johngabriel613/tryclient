import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function useAuth(){
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
}

export function AuthProvider({children}){
  const [userData, setUserData] = useState(null)

  const user = {
    userData,
    setUserData
  }

  return(
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  )
}