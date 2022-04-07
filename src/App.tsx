import { FC, useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { grey } from '@mui/material/colors';
import TxtDownloadIcon from '@mui/icons-material/FormatColorTextRounded';

import ConditionArea from './components/ConditionArea';
import ImgFrame from './components/ImgFrame';
import { getTxt2imgUrl, getTxt2aaUrl, getTxt2aaimgUrl } from './models/condition';
import { ConditionContext, PortContext } from './state/contexts';

const App: FC = () => {
  const { condition } = useContext(ConditionContext);
  const { port, setPort } = useContext(PortContext);

  useEffect(() => {
    (async () => {
      const p = await window.api.getPort();
      p && setPort(p);
    })();
  });

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
        height: 'calc((100% - 294px) / 2)',
        width: '100%',
        mt: 2,
      }}>
        <ImgFrame
          alt="txt2img"
          src={getTxt2imgUrl(condition, port)}
          download="before.png"
        />
      </Box>
      <Box sx={{
        height: 'calc((100% - 294px) / 2)',
        width: '100%',
        mt: 2,
        position: 'relative',
      }}>
        <ImgFrame
          alt="txt2aa"
          src={getTxt2aaimgUrl(condition, port)}
          download="after.png"
        />
        <Box sx={{
          position: 'absolute',
          left: 5,
          bottom: 5,
          bgcolor: grey.A200,
          borderRadius: '100%',
        }}>
          <IconButton onClick={() => window.api.download(getTxt2aaUrl(condition, port), 'aa.txt')}>
            <TxtDownloadIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default App;