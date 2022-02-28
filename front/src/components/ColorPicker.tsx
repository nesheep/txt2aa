import { FC, useCallback, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { PhotoshopPicker } from 'react-color';

type Props = {
  color: string;
  onAccept: (color: string) => void;
};

const ColorPicker: FC<Props> = ({ color, onAccept }) => {
  const [clr, setClr] = useState(color);
  const [open, setOpen] = useState(false);

  const onCancel = useCallback(() => {
    setOpen(false);
    setClr(color);
  }, [color]);

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
      }}>
        <Box sx={{
          flexGrow: 1,
          height: 28,
          mr: 2.5,
          my: 1,
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
      {open &&
        <>
          <button
            onClick={onCancel}
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              zIndex: 1000,
              border: 0,
              opacity: 0,
            }}
          />
          <Box sx={{
            position: 'absolute',
            zIndex: 1001,
          }}>
            <PhotoshopPicker
              color={clr}
              onChange={c => setClr(c.hex)}
              onCancel={onCancel}
              onAccept={() => {
                setOpen(false);
                onAccept(clr);
              }}
            />
          </Box>
        </>
      }
    </Box>
  );
};

export default ColorPicker
