import { FC, useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import { common } from '@mui/material/colors';

type Props = {
  alt: string;
  src: string;
};

const ImgFrame: FC<Props> = ({ alt, src }) => {
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
        mt: 2,
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
    </Box>
  );
};

export default ImgFrame;
