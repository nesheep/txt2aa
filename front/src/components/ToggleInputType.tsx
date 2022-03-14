import { FC } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import EditIcon from '@mui/icons-material/EditRounded';
import TuneIcon from '@mui/icons-material/TuneRounded';

type Props = {
  isSlider: boolean;
  onClick: () => void;
};

const ToggleInputType: FC<Props> = ({ isSlider, onClick }) => (
  <ToggleButtonGroup
    exclusive
    value="isSlider"
    size="small"
    onClick={onClick}
  >
    <ToggleButton
      value="slider"
      selected={isSlider}
    >
      <TuneIcon />
    </ToggleButton>
    <ToggleButton
      value="edit"
      selected={!isSlider}
    >
      <EditIcon />
    </ToggleButton>
  </ToggleButtonGroup>
);

export default ToggleInputType;
