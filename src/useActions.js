import { useMemo } from 'react';

import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

export const useActions = (actions) => {
  const dispatch = useDispatch();
  /**
   * Podemos memoizar 'useMemo()' o valor para evitar que
   * ele seja recomputado toda vez e assim recomputa-lo
   * apenas quando actions mudarem */
  return useMemo(
    () => bindActionCreators(actions, dispatch),
    [actions, dispatch]
  );
};
