import { FC, useState } from 'react';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Popover from '@mui/material/Popover';
import { grey } from '@mui/material/colors';
import { SxProps, Theme } from '@mui/material/styles';

type Props = {
  value: string;
  onChange: (value: string) => void;
  sx?: SxProps<Theme>;
};

const BgButton: FC<Props> = ({ value, onChange, sx }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);

  return (
    <>
      <Badge
        variant="dot"
        color="primary"
        invisible={!value}
      >
        <Button
          variant="outlined"
          onClick={e => setAnchorEl(e.currentTarget)}
          sx={{ ...sx }}
        >
          背景
        </Button>
      </Badge>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{ sx: { bgcolor: grey.A200 } }}
      >
        <Box sx={{
          m: 1,
          display: 'flex',
        }}>
          <Input
            value={value}
            sx={{ width: 280 }}
          />
          <Button
            variant="outlined"
            sx={{ ml: 1 }}
            onClick={async () => {
              try {
                const img = (await (await fetch('/open/img')).json()).img;
                onChange(img);
              } catch (error) {
                if (error instanceof Error) console.error(error.message);
              }
              setAnchorEl(null);
            }}
          >
            参照
          </Button>
          <Button
            variant="outlined"
            color="error"
            sx={{ ml: 1 }}
            onClick={() => {
              onChange('');
              setAnchorEl(null);
            }}
          >
            取消
          </Button>
        </Box>
      </Popover>
    </>
  );
};

export default BgButton;
