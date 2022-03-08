import { FC } from 'react';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

import { FONT_NAMES } from '../models/condition';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const FontSelect: FC<Props> = ({ value, onChange }) => (
  <TextField
    select
    fullWidth
    variant="standard"
    value={value}
    onChange={e => onChange(e.target.value)}
  >
    {FONT_NAMES.map((fontName, i) => (
      <MenuItem
        key={i}
        value={fontName}
      >
        {fontName}
      </MenuItem>
    ))}
  </TextField>
);

export default FontSelect;
