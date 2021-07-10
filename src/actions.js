/** Types */
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
/**
 * We will tell to not 'reset' but to 'set' to any
 * arbitrary number.
 * */
export const SET = 'SET';

/**
 ** Actions
 *
 * Existem inúmeras implementações de vários tipos
 * o que importa realmente é a consistência no uso.
 * */
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const set = (value) => ({ type: SET, payload: value });
