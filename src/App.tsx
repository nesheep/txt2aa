import { FC, useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { grey } from '@mui/material/colors';
import TxtDownloadIcon from '@mui/icons-material/FormatColorTextRounded';

import BackdropProgress from './components/BackdropProgress';
import ConditionArea from './components/ConditionArea';
import ImgFrame from './components/ImgFrame';
import TitleBar from './components/TitleBar';
import { getTxt2imgUrl, getTxt2aaUrl, getTxt2aaimgUrl } from './models/condition';
import { ConditionContext, PortsContext } from './state/contexts';

const App: FC = () => {
  const { condition } = useContext(ConditionContext);
  const { ports, setPorts } = useContext(PortsContext);

  useEffect(() => {
    (async () => {
      const ps = await window.api.getPorts();
      if (!ps.length) return;
      for (let i = 0; i < 120; i++) {
        try {
          for (let j = 0; j < ps.length; j++) {
            await fetch(`http://localhost:${ps[j]}`);
          }
          break;
        } catch (error) {
          if (error instanceof Error) console.error(error.message);
          await new Promise<void>(resolve => setTimeout(resolve, 250));
        }
      }
      setPorts(ps);
    })();
  }, [setPorts]);

  return (
    <>
      <TitleBar />
      <Box sx={{
        pt: 6,
        pb: 2,
        px: 2,
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
            src={getTxt2imgUrl(condition, ports)}
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
            src={getTxt2aaimgUrl(condition, ports)}
            download="after.png"
          />
          <Box sx={{
            position: 'absolute',
            left: 5,
            bottom: 5,
            bgcolor: grey.A200,
            borderRadius: '100%',
          }}>
            <IconButton onClick={() => window.api.download(getTxt2aaUrl(condition, ports), 'aa.txt')}>
              <TxtDownloadIcon />
            </IconButton>
          </Box>
        </Box>
        <BackdropProgress open={!ports.length} />
      </Box>
    </>
  );
};

export default App;
