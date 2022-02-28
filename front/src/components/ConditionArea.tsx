import { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import Condition from '../models/condition';

type GridItemProps = {
  xs: number;
  children: ReactNode;
};

type Props = {
  condition: Condition;
  setCondition: Dispatch<SetStateAction<Condition>>;
};

const GridItem: FC<GridItemProps> = ({ xs, children }) => (
  <Grid
    item
    xs={xs}
    display="flex"
    alignItems="center"
  >
    {children}
  </Grid>
);

const ConditionsArea: FC<Props> = ({ condition, setCondition }) => {
  const { txt, fontSize, numy, exp } = condition;

  return (
    <Box sx={{
      width: '100%',
      maxWidth: 1000,
    }}>
      <Box sx={{
        p: 2,
        bgcolor: '#95ca7f',
      }}>
        <TextField
          autoFocus
          fullWidth
          variant="filled"
          color="success"
          value={txt}
          onChange={e => setCondition(prev => ({ ...prev, txt: e.target.value }))}
        />
        <Box sx={{
          mt: 2,
          display: 'flex',
        }}>
          <Grid
            container
            alignItems="flex-start"
            sx={{
              width: '100%',
              pr: 4,
            }}
          >
            <GridItem xs={4}>
              <Typography variant="subtitle1">
                フォントサイズ
              </Typography>
            </GridItem>
            <GridItem xs={8}>
              <Slider
                min={50}
                max={400}
                valueLabelDisplay="auto"
                value={fontSize}
                onChange={(_, value) => setCondition(prev => ({ ...prev, fontSize: Number(value) }))}
              />
            </GridItem>
          </Grid>
          <Grid
            container
            sx={{
              width: '100%',
              pr: 2,
            }}
          >
            <GridItem xs={4}>
              <Typography variant="subtitle1">
                AA文字数（縦）
              </Typography>
            </GridItem>
            <GridItem xs={8}>
              <Slider
                min={10}
                max={50}
                valueLabelDisplay="auto"
                value={numy}
                onChange={(_, value) => setCondition(prev => ({ ...prev, numy: Number(value) }))}
              />
            </GridItem>
            <GridItem xs={4}>
              <Typography variant="subtitle1">
                AAフォント倍率
              </Typography>
            </GridItem>
            <GridItem xs={8}>
              <Slider
                min={0.5}
                max={3}
                step={0.1}
                valueLabelDisplay="auto"
                value={exp}
                onChange={(_, value) => setCondition(prev => ({ ...prev, exp: Number(value) }))}
              />
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </Box >
  );
};

export default ConditionsArea;
