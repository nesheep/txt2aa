import { FC, useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import Slider from '@mui/material/Slider';

type Props = {
  isSlider: boolean;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
  end?: string;
};

const SliderInput: FC<Props> = ({ isSlider, value, onChange, min, max, step = 1, end }) => {
  const [inputValue, setInputValue] = useState(String(value));

  return (isSlider ?
    <Slider
      value={value}
      onChange={(_, value) => {
        setInputValue(String(value));
        onChange(Number(value));
      }}
      min={min}
      max={max}
      step={step}
      valueLabelDisplay="auto"
    />
    :
    <Input
      fullWidth
      size="small"
      color="success"
      value={inputValue}
      endAdornment={<InputAdornment position="end">{end}</InputAdornment>}
      onChange={e => {
        const value = e.target.value;
        if (isNaN(Number(value))) return;
        setInputValue(value);
        onChange(Number(value));
      }}
    />
  );
};

export default SliderInput;
