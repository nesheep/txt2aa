import { Dispatch, SetStateAction, createContext } from 'react';

import Condition from '../models/condition';

export const ConditionContext = createContext({} as {
  condition: Condition;
  setCondition: Dispatch<SetStateAction<Condition>>;
});

export const FontNamesContext = createContext({} as {
  fontNames: string[];
  setFontNames: Dispatch<SetStateAction<string[]>>;
});
