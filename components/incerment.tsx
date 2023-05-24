import { useState } from 'react';

const Increment: React.FC = () => {
  const [num, setNum] = useState<number>(0);

  const incrementNum = () => {
    setNum(num + 1);
  };

  const decrementNum = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      alert("Number cannot be less than 0");
    }
  };

  return (
    <div>
      <p>Number: {num}</p>
      <button onClick={incrementNum}>Increment</button>
      <button onClick={decrementNum}>Decrement</button>
    </div>
  );
};

export default Increment;
