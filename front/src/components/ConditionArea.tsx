import { Dispatch, FC, SetStateAction } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';

import ColorPicker from './ColorPicker';
import ConditionItem from './ConditionItem';
import Condition from '../models/condition';

type Props = {
  condition: Condition;
  setCondition: Dispatch<SetStateAction<Condition>>;
};

const ConditionsArea: FC<Props> = ({ condition, setCondition }) => {
  const { txt, fontSize, color, numy, exp } = condition;

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
            spacing={1}
            sx={{
              width: '100%',
              pr: 4,
            }}
          >
            <ConditionItem label="フォントサイズ">
              <Slider
                min={50}
                max={400}
                valueLabelDisplay="auto"
                value={fontSize}
                onChange={(_, value) => setCondition(prev => ({ ...prev, fontSize: Number(value) }))}
              />
            </ConditionItem>
            <ConditionItem label="色">
              <ColorPicker
                color={color}
                onAccept={c => setCondition(prev => ({ ...prev, color: c }))}
              />
            </ConditionItem>
          </Grid>
          <Grid
            container
            sx={{
              width: '100%',
              pr: 2,
            }}
          >
            <ConditionItem label="AA文字数（縦）">
              <Slider
                min={10}
                max={50}
                valueLabelDisplay="auto"
                value={numy}
                onChange={(_, value) => setCondition(prev => ({ ...prev, numy: Number(value) }))}
              />
            </ConditionItem>
            <ConditionItem label="AAフォント倍率">
              <Slider
                min={0.5}
                max={3}
                step={0.1}
                valueLabelDisplay="auto"
                value={exp}
                onChange={(_, value) => setCondition(prev => ({ ...prev, exp: Number(value) }))}
              />
            </ConditionItem>
          </Grid>
        </Box>
      </Box>
    </Box >
  );
};

export default ConditionsArea;
