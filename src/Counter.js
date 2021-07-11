import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import { set, increment, decrement } from './actions';
import SetCounter from './SetCounter';
import { useActions } from './useActions';
import { useCounter } from './useCounter';

export const Counter = () => {
  const incident = 'Incident';

  /**
   ** Use hooks para selecionar elementos.
   *
   * Essa função te pergunta o seguinte:
   * O que vc quer do state total?
   *
   * Você pode disparar esses types direto na extensão
   */
  // const { count } = useSelector((state) => state);

  /**
   * useDispatch
   * Diferente de useReducer()
   */
  // const dispatch = useDispatch();

  /** DRY */

  // pulling out with hooks from action creators hook
  const { count, increment, decrement, set } = useCounter();

  const handleReset = () => set(0);
  const handleIncrement = () => increment();
  const handleDecrement = () => decrement();

  // * binding with hooks
  // const actions = useActions({
  //   increment,
  //   decrement,
  //   set
  // });
  // const handleReset = () => actions.set(0);
  // const handleIncrement = () => actions.increment();
  // const handleDecrement = () => actions.decrement();

  // * binding actions
  // const actions = bindActionCreators({ increment, decrement, set }, dispatch);

  // const handleReset = () => actions.set(0);
  // const handleIncrement = () => actions.increment();
  // const handleDecrement = () => actions.decrement();

  // * default
  // const handleReset = () => dispatch(set(0));
  // const handleIncremet = () => dispatch(increment());
  // const handleDecrement = () => dispatch(decrement());

  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDecrement}>Decrement</button>
      </section>
      <SetCounter />
    </main>
  );
};

export default Counter;
