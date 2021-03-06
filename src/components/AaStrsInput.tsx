import { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FilledInput from '@mui/material/FilledInput';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { SxProps, Theme } from '@mui/material/styles';

type Props = {
  value: string;
  onChange: (value: string) => void;
  sx?: SxProps<Theme>;
};

const AsStrsInput: FC<Props> = ({ value, onChange, sx }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const items: { label: string, strs: string }[] = [
    {
      label: 'ASCII',
      strs: `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz +-*/%'"!?#&()~^|@;:.,[]{}<>_0123456789`,
    },
    {
      label: 'ひらがな',
      strs: 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん　',
    },
    {
      label: 'カタカナ',
      strs: 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン　',
    },
  ];

  return (
    <Box sx={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      ...sx,
    }}>
      <FilledInput
        fullWidth
        hiddenLabel
        size="small"
        color="success"
        value={value}
        onChange={e => onChange(e.target.value)}
        sx={{ mr: 2.5 }}
      />
      <Button
        variant="outlined"
        onClick={e => setAnchorEl(e.currentTarget)}
      >
        選択
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
      >
        {items.map(({ label, strs }, i) => (
          <MenuItem
            key={i}
            onClick={() => {
              onChange(strs);
              setAnchorEl(null);
            }}
          >
            {label}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default AsStrsInput;
