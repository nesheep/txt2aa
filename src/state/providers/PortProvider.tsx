import { FC, ReactNode, useState } from 'react';

import { PortContext } from '../contexts';

type Props = { children: ReactNode };

const PortProvider: FC<Props> = ({ children }) => {
  const [port, setPort] = useState(0);

  return (
    <PortContext.Provider value={{ port, setPort }}>
      {children}
    </PortContext.Provider>
  );
};

export default PortProvider;
