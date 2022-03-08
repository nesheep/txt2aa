import { FC, useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import DownloadIcon from '@mui/icons-material/DownloadRounded';
import { common } from '@mui/material/colors';

type Props = {
  alt: string;
  src: string;
  download: string;
};

const ImgFrame: FC<Props> = ({ alt, src, download }) => {
  const container = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(100);

  const resizeListener = () => {
    if (!container.current) return;
    setHeight(container.current.clientHeight);
  };

  useEffect(() => {
    resizeListener();
    window.addEventListener('resize', resizeListener);
  }, [container]);

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
          height,
          width: '100%',
          backgroundColor: common.white,
          borderRadius: 10,
          display: 'block',
          objectFit: 'scale-down',
        }}
      />
      <IconButton
        href={src}
        download={download}
        sx={{
          position: 'absolute',
          right: 3,
          bottom: 3,
        }}
      >
        <DownloadIcon />
      </IconButton>
    </Box>
  );
};

export default ImgFrame;
