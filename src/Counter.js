import { useSelector } from 'react-redux';

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
  const { count } = useSelector((state) => state);

  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button>Increment</button>
        <button>Reset</button>
        <button>Decrement</button>
      </section>
    </main>
  );
};

export default Counter;
