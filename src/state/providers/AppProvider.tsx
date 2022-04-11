import { FC, ReactNode } from 'react';

import ConditionProvider from './ConditionProvider';
import FontNamesProvider from './FontNamesProvider';
import PortsProvider from './PortsProvider';

type Props = { children: ReactNode };

const AppProvider: FC<Props> = ({ children }) => (
  <ConditionProvider>
    <FontNamesProvider>
      <PortsProvider>
        {children}
      </PortsProvider>
    </FontNamesProvider>
  </ConditionProvider>
);

export default AppProvider;
