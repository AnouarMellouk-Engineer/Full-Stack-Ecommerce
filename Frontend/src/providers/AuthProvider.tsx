import { createContext, useState, useContext, useEffect } from "react";

const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getInfo = async () => {
      try {
        const response = await fetch("http://localhost:3000/auth/data", {
          method: "GET",
          credentials: "include",
        });
        if (response.ok) {
          const data = await response.json();

          setUser({
            firstName: data.data.firstName,
            lastName: data.data.lastName,
            email: data.data.email,
            role: data.data.role,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    getInfo();
  }, []);

  return (
    <authContext.Provider value={{ user, setUser }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(authContext);
};
