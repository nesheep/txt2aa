import { FC } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { grey } from '@mui/material/colors';
import { SxProps, Theme } from '@mui/material/styles';
import CircleIcon from '@mui/icons-material/Circle';

type Props = {
  value: string;
  values: string[];
  onChange: (value: string) => void;
  sx?: SxProps<Theme>;
};

const ColorSelectButtons: FC<Props> = ({ value, values, onChange, sx }) => (
  <ToggleButtonGroup
    exclusive
    value={value}
    size="small"
    onChange={(_, a) => a ? onChange(a) : null}
    sx={{
      bgcolor: grey.A200,
      borderRadius: 1,
      ...sx,
    }}
  >
    {values.map((v, i) => (
      <ToggleButton
        key={i}
        value={v}
      >
        <CircleIcon
          fontSize="small"
          htmlColor={v}
        />
      </ToggleButton>
    ))}
  </ToggleButtonGroup>
);

export default ColorSelectButtons;
