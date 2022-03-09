import { FC, useContext } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TxtDownloadIcon from '@mui/icons-material/FormatColorTextRounded';

import ConditionArea from './components/ConditionArea';
import ImgFrame from './components/ImgFrame';
import { getTxt2imgUrl, getTxt2aaUrl, getTxt2aaimgUrl } from './models/condition';
import { ConditionContext } from './state/contexts';

const App: FC = () => {
  const { condition } = useContext(ConditionContext);

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
      <ConditionArea />
      <Box sx={{
        height: '100%',
        width: '100%',
        mt: 2,
      }}>
        <ImgFrame
          alt="txt2img"
          src={getTxt2imgUrl(condition)}
          download="before.png"
        />
      </Box>
      <Box sx={{
        height: '100%',
        width: '100%',
        mt: 2,
        position: 'relative',
      }}>
        <ImgFrame
          alt="txt2aa"
          src={getTxt2aaimgUrl(condition)}
          download="after.png"
        />
        <IconButton
          href={getTxt2aaUrl(condition)}
          download="aa.txt"
          sx={{
            position: 'absolute',
            left: 3,
            bottom: 3,
          }}
        >
          <TxtDownloadIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default App;
