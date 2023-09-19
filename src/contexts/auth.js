import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    if (userToken) {
      const { email } = JSON.parse(userToken);
      getUserFromAPI(email); // Faça uma chamada à API para buscar o usuário
    }
  }, []);

  const getUserFromAPI = async (email) => {
    try {
      const response = await fetch(`http://localhost:5000/usuarios/email/:user${email}`);
      if (!response.ok) {
        throw new Error("Erro ao buscar usuário na API");
      }
      const data = await response.json();
      setUser(data); // Define o usuário retornado pela API
    } catch (error) {
      console.error("Erro ao buscar usuário na API", error);
    }
  };

  const signin = async (email, senha) => {
    try {
      const response = await fetch("http://localhost:5000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
      });

      if (!response.ok) {
        throw new Error("Erro ao fazer login na API");
      }

      const { token } = await response.json();

      localStorage.setItem("user_token", JSON.stringify({ email, token }));
      getUserFromAPI(email); // Busque o usuário após o login bem-sucedido
    } catch (error) {
      console.error("Erro ao fazer login na API", error);
      // Lide com os erros de login aqui, por exemplo, exibindo uma mensagem de erro.
    }
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  return (
    <AuthContext.Provider value={{ user, signed: !!user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
