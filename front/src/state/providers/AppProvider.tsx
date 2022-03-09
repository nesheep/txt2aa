import { FC, ReactNode } from 'react';

import ConditionProvider from './ConditionProvider';
import FontNamesProvider from './FontNamesProvider';

type Props = { children: ReactNode };

const AppProvider: FC<Props> = ({ children }) => (
  <ConditionProvider>
    <FontNamesProvider>
      {children}
    </FontNamesProvider>
  </ConditionProvider>
);

export default AppProvider;
