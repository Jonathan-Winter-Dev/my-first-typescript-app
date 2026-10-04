type BankDisplayProps = {
  deleteAccount: () => void;
  updateBalance: (newBalance: number) => void;
  name: string;
  balance: number;
  isPlatinum: boolean;
};

export default function BankDisplay({
  deleteAccount,
  updateBalance,
  name,
  balance,
  isPlatinum,
}: BankDisplayProps) {
  function handleDeleteAccount() {
    deleteAccount();
  }

  function handleUpdateBalance(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
    updateBalance(Number(e.target.value));
  }

  return (
    <>
      <h1>
        Howdy {name} - {isPlatinum ? "Platinum" : "Standard"} Account
      </h1>
      <h2>£{balance}</h2>
      <form action="">
        <label htmlFor="updateBalance"></label>
        <input
          type="number"
          name="updateBalance"
          id="updateBalance"
          value={balance}
          onChange={handleUpdateBalance}
        />
      </form>
      <button onClick={handleDeleteAccount}>Delete Account</button>
    </>
  );
}
