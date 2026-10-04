import Account from "./account.ts";

type AccountFormProps = {
  addAccount: (newAccount: Account) => void;
};

export default function NewAccountForm({ addAccount }: AccountFormProps) {
  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(e.target.accountName.value);
    addAccount(
      new Account(e.target.accountName.value, e.target.isPlatinum.isChecked),
    );
  }

  return (
    <>
      <form method="" onSubmit={handleSubmit}>
        <fieldset>
          <span>
            <label htmlFor="accountName">Account Name</label>
            <input type="text" name="accountName" id="accountName" required />
          </span>
          <span>
            <label htmlFor="isPlatinum">Create Platinum Account</label>
            <input type="checkbox" name="isPlatinum" id="isPlatinum" />
          </span>
        </fieldset>
        <input type="submit" />
      </form>
    </>
  );
}
