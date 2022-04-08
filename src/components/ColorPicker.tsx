import { FC, useCallback, useState, useRef } from 'react';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Popover from '@mui/material/Popover';
import Tooltip from '@mui/material/Tooltip';
import { SxProps, Theme } from '@mui/material/styles';
import { PhotoshopPicker } from 'react-color';

type Props = {
  label: string;
  color: string;
  onAccept: (color: string) => void;
  sx?: SxProps<Theme>;
};

const ColorPicker: FC<Props> = ({ label, color, onAccept, sx }) => {
  const [clr, setClr] = useState(color);
  const [open, setOpen] = useState(false);
  const anchorEl = useRef<HTMLDivElement>(null);

  const handleCancel = useCallback(() => {
    setOpen(false);
    setClr(color);
  }, [color]);

  return (
    <>
      <Tooltip
        title={label}
        placement="top"
        arrow
      >
        <Box
          ref={anchorEl}
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            ...sx,
          }}
        >
          <ButtonBase
            onClick={() => setOpen(true)}
            sx={{
              flexGrow: 1,
              height: 28,
              bgcolor: color,
              border: '1px solid rgba(0, 0, 0, 0.3)',
              borderRadius: 2,
            }}
          />
        </Box>
      </Tooltip>
      <Popover
        open={open}
        anchorEl={anchorEl.current}
        onClose={handleCancel}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <PhotoshopPicker
          header={label}
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
