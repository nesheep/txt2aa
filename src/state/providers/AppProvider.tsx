import { FC, ReactNode } from 'react';

import ConditionProvider from './ConditionProvider';
import FontNamesProvider from './FontNamesProvider';
import PortProvider from './PortProvider';

type Props = { children: ReactNode };

const AppProvider: FC<Props> = ({ children }) => (
  <ConditionProvider>
    <FontNamesProvider>
      <PortProvider>
        {children}
      </PortProvider>
    </FontNamesProvider>
  </ConditionProvider>
);

export default AppProvider;
