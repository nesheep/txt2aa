import { FC, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import ImgFrame from './components/ImgFrame';

const App: FC = () => {
  const [txt, setTxt] = useState('aa');

  return (
    <Box sx={{
      p: 2,
      bgcolor: '#79a467',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <Box sx={{
        width: '100%',
        maxWidth: 800,
        display: 'flex',
      }}>
        <TextField
          variant="standard"
          value={txt}
          onChange={e => setTxt(e.target.value)}
          sx={{
            flexGrow: 1,
            bgcolor: '#95ca7f',
          }}
        />
      </Box>
      <ImgFrame
        alt="txt2img"
        src={`/txt2img?txt=${txt}`}
      />
      <ImgFrame
        alt="txt2aa_img"
        src={`/txt2aa/img?txt=${txt}`}
      />
    </Box>
  );
};

export default App;
