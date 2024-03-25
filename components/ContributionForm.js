// components/ContributionForm.js
import { useState } from "react";

const ContributionForm = () => {
  const [amount, setAmount] = useState(0);

  const handleContribute = (e) => {
    e.preventDefault();
    // Logic to contribute funds to project
  };

  return (
    <form onSubmit={handleContribute}>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount to contribute"
      />
      <button type="submit">Contribute</button>
    </form>
  );
};

export default ContributionForm;
