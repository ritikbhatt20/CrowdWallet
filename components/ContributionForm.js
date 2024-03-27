import { useState } from 'react';
import { useAppContext } from '@/context/context';

const ContributionForm = () => {
  const { contribute } = useAppContext();
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    contribute(amount);
  };

  return (
    <div className="container" style={{margin: 50}}>
      <h2 className="mt-4">Contribute Funds</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">Amount:</label>
          <input 
            type="number" 
            id="amount" 
            className="form-control" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
          />
        </div>
        <button type="submit" className="btn btn-primary">Contribute</button>
      </form>
    </div>
  );
};

export default ContributionForm;
