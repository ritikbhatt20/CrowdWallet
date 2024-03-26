// import { useState } from 'react';
// import { useAppContext } from '../context';

// const ContributionForm = () => {
//   const { contribute } = useAppContext();
//   const [amount, setAmount] = useState(0);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Call the contribute function from the context
//     contribute(amount);
//   };

//   return (
//     <div>
//       <h2>Contribute Funds</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Amount:</label>
//           <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
//         </div>
//         <button type="submit">Contribute</button>
//       </form>
//     </div>
//   );
// };

// export default ContributionForm;
