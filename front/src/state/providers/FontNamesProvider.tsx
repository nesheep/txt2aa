import { FC, ReactNode, useState } from 'react';

import { FontNamesContext } from '../contexts';
import { FONT_NAMES } from '../../models/condition';

type Props = { children: ReactNode };

const FontNamesProvider: FC<Props> = ({ children }) => {
  const [fontNames, setFontNames] = useState(FONT_NAMES);

  return (
    <FontNamesContext.Provider value={{ fontNames, setFontNames }}>
      {children}
    </FontNamesContext.Provider>
  );
};

export default FontNamesProvider;
