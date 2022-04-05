import { FC, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ToggleButton from '@mui/material/ToggleButton';
import { common, grey } from '@mui/material/colors';
import DownloadIcon from '@mui/icons-material/DownloadRounded';
import FitIcon from '@mui/icons-material/FitScreenRounded';

import ColorSelectButtons from './ColorSelectButtons';

type Props = {
  alt: string;
  src: string;
  download: string;
};

const ImgFrame: FC<Props> = ({ alt, src, download }) => {
  const container = useRef<HTMLDivElement>(null);
  const [fit, setFit] = useState(false);
  const [bgcolor, setBgcolor] = useState<string>(common.white);

  return (
    <Box
      ref={container}
      sx={{
        height: '100%',
        width: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img
        alt={alt}
        src={src}
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: bgcolor,
          borderRadius: 10,
          display: 'block',
          objectFit: fit ? 'scale-down' : 'none',
        }}
      />
      <Box sx={{
        position: 'absolute',
        left: 5,
        top: 5,
        bgcolor: grey.A200,
        borderRadius: 1,
      }}>
        <ToggleButton
          value="fit"
          size="small"
          selected={fit}
          onChange={() => setFit(prev => !prev)}
        >
          <FitIcon fontSize="small" />
        </ToggleButton>
      </Box>
      <ColorSelectButtons
        value={bgcolor}
        values={[common.white, grey.A400, common.black]}
        onChange={value => setBgcolor(value)}
        sx={{
          position: 'absolute',
          right: 5,
          top: 5,
        }}
      />
      <Box sx={{
        position: 'absolute',
        right: 5,
        bottom: 5,
        bgcolor: grey.A200,
        borderRadius: '100%',
      }}>
        <IconButton
          href={src}
          download={download}
        >
          <DownloadIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ImgFrame;
