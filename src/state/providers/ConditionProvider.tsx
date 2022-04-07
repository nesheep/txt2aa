import { FC, ReactNode, useState } from 'react';

import { ConditionContext } from '../contexts';
import Condition, { initialCondition } from '../../models/condition';

type Props = { children: ReactNode };

const ConditionProvider: FC<Props> = ({ children }) => {
  const [condition, setCondition] = useState<Condition>(initialCondition);

  return (
    <ConditionContext.Provider value={{ condition, setCondition }}>
      {children}
    </ConditionContext.Provider>
  );
};

export default ConditionProvider;
