import { useState } from "react";
import "./App.css";
import Account from "./account";
import NewAccountForm from "./addAccount";
import BankDisplay from "./bankDisplay";
import Gif from "./apiPractice";

function App() {
  const [account, setAccount] = useState<Account | null>(null);

  function addAccount(newAccount: Account) {
    setAccount(newAccount);
  }

  function deleteAccount() {
    setAccount(null);
  }

  function updateBalance(newBalance: number) {
    if (account) {
      setAccount({ ...account, balance: newBalance });
    }
  }

  return (
    <>
      {account ? (
        <BankDisplay
          isPlatinum={account.isPlatinum}
          name={account.name}
          balance={account.balance}
          updateBalance={updateBalance}
          deleteAccount={deleteAccount}
        />
      ) : (
        <NewAccountForm addAccount={addAccount} />
      )}
      {account ? <Gif name={account.name} /> : ""}
    </>
  );
}

export default App;
