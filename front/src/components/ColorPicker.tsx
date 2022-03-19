import { FC, useCallback, useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import { PhotoshopPicker } from 'react-color';

type Props = {
  color: string;
  onAccept: (color: string) => void;
};

const ColorPicker: FC<Props> = ({ color, onAccept }) => {
  const [clr, setClr] = useState(color);
  const [open, setOpen] = useState(false);
  const anchorEl = useRef<HTMLDivElement>(null);

  const handleCancel = useCallback(() => {
    setOpen(false);
    setClr(color);
  }, [color]);

  return (
    <>
      <Box
        ref={anchorEl}
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box sx={{
          flexGrow: 1,
          height: 28,
          mr: 2.5,
          bgcolor: color,
          border: '1px solid rgba(0, 0, 0, 0.3)',
          borderRadius: 2,
        }} />
        <Button
          variant="outlined"
          onClick={() => setOpen(true)}
        >
          変更
        </Button>
      </Box>
      <Popover
        open={open}
        anchorEl={anchorEl.current}
        onClose={handleCancel}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <PhotoshopPicker
          color={clr}
          onChange={c => setClr(c.hex)}
          onCancel={handleCancel}
          onAccept={() => {
            setOpen(false);
            onAccept(clr);
          }}
        />
      </Popover>
    </>
  );
};

export default ColorPicker;
