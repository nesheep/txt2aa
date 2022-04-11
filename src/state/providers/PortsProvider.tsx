import { FC, ReactNode, useState } from 'react';

import { PortsContext } from '../contexts';

type Props = { children: ReactNode };

const PortsProvider: FC<Props> = ({ children }) => {
  const [ports, setPorts] = useState<number[]>([]);

  return (
    <PortsContext.Provider value={{ ports, setPorts }}>
      {children}
    </PortsContext.Provider>
  );
};

export default PortsProvider;
