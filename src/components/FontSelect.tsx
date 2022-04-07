import { FC, useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

import { FontNamesContext } from '../state/contexts';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const FontSelect: FC<Props> = ({ value, onChange }) => {
  const { fontNames, setFontNames } = useContext(FontNamesContext);

  return (
    <Box sx={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
    }}>
      <TextField
        select
        fullWidth
        variant="standard"
        value={value}
        onChange={e => onChange(e.target.value)}
        sx={{ mr: 2.5 }}
        SelectProps={{
          MenuProps: {
            PaperProps: {
              sx: { maxHeight: 500 },
            },
          },
        }}
      >
        {fontNames.map((fontName, i) => (
          <MenuItem
            key={i}
            value={fontName}
          >
            {fontName}
          </MenuItem>
        ))}
      </TextField>
      <Button
        variant="outlined"
        onClick={async () => {
          const font = await window.api.openFont();
          if (!font) return;
          setFontNames(prev => prev.includes(font) ? prev : [...prev, font]);
          onChange(font);
        }}
      >
        参照
      </Button>
    </Box>
  )
};

export default FontSelect;
