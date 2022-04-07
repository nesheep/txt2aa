import { FC } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

type Props = { open: boolean };

const BackdropProgress: FC<Props> = ({ open }) => (
  <Backdrop
    open={open}
    sx={{ color: 'common.white' }}
  >
    <CircularProgress color="inherit" />
  </Backdrop>
);

export default BackdropProgress;
