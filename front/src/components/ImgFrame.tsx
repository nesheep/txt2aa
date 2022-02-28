import { FC } from 'react';
import Box from '@mui/material/Box';
import { common } from '@mui/material/colors';

type Props = {
  alt: string;
  src: string;
};

const ImgFrame: FC<Props> = ({ alt, src }) => (
  <Box sx={{
    flexGrow: 1,
    width: '100%',
    mt: 2,
    bgcolor: '#95ca7f',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    <img
      alt={alt}
      src={src}
      style={{
        height: 180,
        width: '100%',
        backgroundColor: common.white,
        display: 'block',
        objectFit: 'scale-down',
      }}
    />
  </Box>
);

export default ImgFrame;
