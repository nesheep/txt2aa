import { FC, useState } from 'react';
import Box from '@mui/material/Box';

import ConditionArea from './components/ConditionArea';
import ImgFrame from './components/ImgFrame';
import Condition, { initialCondition } from './models/condition';

const App: FC = () => {
  const [condition, setCondition] = useState<Condition>(initialCondition);
  const { txt, fontSize, color, numy, exp } = condition;

  return (
    <Box sx={{
      p: 2,
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <ConditionArea
        condition={condition}
        setCondition={setCondition}
      />
      <ImgFrame
        alt="txt2img"
        src={`/txt2img?txt=${txt}&fs=${fontSize}&clr=${color.slice(1)}`}
      />
      <ImgFrame
        alt="txt2aa_img"
        src={`/txt2aa/img?txt=${txt}&fs=${fontSize}&clr=${color.slice(1)}&ny=${numy}&exp=${exp}`}
      />
    </Box>
  );
};

export default App;
