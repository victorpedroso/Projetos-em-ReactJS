import React, { useEffect, useState } from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Form from "./components/Form";
import RoutesApp from "./routes";

import { AuthProvider } from "./contexts/auth";

const App = () => {
  const [transactionsList, setTransactionsList] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Função para carregar as transações da API e atualizar o estado local
    const fetchTransactions = async () => {
      try {
        const response = await fetch("http://localhost:5000/todastransacoes");
        if (!response.ok) {
          throw new Error("Erro ao buscar transações");
        }
        const data = await response.json();
        setTransactionsList(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTransactions();
  }, []);

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount));

    const amountIncome = transactionsList
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = Math.abs(income - expense).toFixed(2);

    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);
  }, [transactionsList]);

  const handleAdd = (transaction) => {
    // Enviar a transação para a API usando fetch
    fetch("http://localhost:5000/transacao", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transaction),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao enviar transação");
        }
        return response.json();
      })
      .then((data) => {
        // Se a transação for enviada com sucesso, você pode atualizar a lista de transações
        setTransactionsList([...transactionsList, data]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
    <AuthProvider>
        <Header />
        <Resume income={income} expense={expense} total={total} />
        <Form
          handleAdd={handleAdd}
          transactionsList={transactionsList}
          setTransactionsList={setTransactionsList}
        />
        <RoutesApp/>
        <GlobalStyle />
      </AuthProvider>
    </>
  );
};

export default App;
