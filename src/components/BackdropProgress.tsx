import { FC } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

type Props = { open: boolean };

const BackdropProgress: FC<Props> = ({ open }) => (
  <Backdrop
    open={open}
    sx={{
      color: 'common.black',
      bgcolor: '#00000000',
    }}
  >
    <CircularProgress color="inherit" />
  </Backdrop>
);

export default BackdropProgress;
