import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { set } from './actions';

const SetCounter = () => {
  // hooks
  const { count } = useSelector((state) => state);
  const dispatch = useDispatch();

  // state
  const [number, setNumber] = useState(count);

  // handlers
  const handleNumberChange = (e) => setNumber(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(set(number));
  };

  // effects
  useEffect(() => {
    setNumber(count);
  }, [count]);

  return (
    <section className="controls">
      <form onSubmit={handleSubmit}>
        <label htmlFor="set-to">Set Count</label>
        <input
          id="set-to"
          type="number"
          value={number}
          onChange={handleNumberChange}
        />
        <input type="submit" />
      </form>
    </section>
  );
};

export default SetCounter;
