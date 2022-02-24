import { FC, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const App: FC = () => {
  const [txt, setTxt] = useState('aa');

  return (
    <Box>
      <TextField
        value={txt}
        onChange={e => setTxt(e.target.value)}
      />
      <Box>
        <img
          src={`/txt2img?txt=${txt}`}
          alt="txt2img"
        />
      </Box>
      <Box>
        <img
          src={`/txt2aa/img?txt=${txt}`}
          alt="txt2aa_img"
        />
      </Box>
    </Box>
  );
};

export default App;
