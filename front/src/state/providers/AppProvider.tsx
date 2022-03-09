import { FC, ReactNode } from 'react';

import ConditionProvider from './ConditionProvider';

type Props = { children: ReactNode };

const AppProvider: FC<Props> = ({ children }) => (
  <ConditionProvider>
    {children}
  </ConditionProvider>
);

export default AppProvider;
