import { useAppContext } from "@/context/context";

const ClaimFundsButton = () => {
  const { claimFunds } = useAppContext();

  const handleClick = () => {
    // Call the claimFunds function from the context
    claimFunds();
  };

  return (
    <div>
      <h2>Claim Funds</h2>
      <button onClick={handleClick}>Claim Funds</button>
    </div>
  );
};

export default ClaimFundsButton;
