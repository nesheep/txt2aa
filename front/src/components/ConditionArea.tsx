import { FC, useContext, useState } from 'react';
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import Grid from '@mui/material/Grid';

import AaStrsInput from './AaStrsInput';
import ColorPicker from './ColorPicker';
import ConditionItem from './ConditionItem';
import FontSelect from './FontSelect';
import SliderInput from './SliderInput';
import ToggleInputType from './ToggleInputType';
import { ConditionContext } from '../state/contexts';

const ConditionsArea: FC = () => {
  const [isSlider, setIsSlider] = useState(true);
  const { condition, setCondition } = useContext(ConditionContext);
  const { txt, font, fontSize, color, aaFont, numy, exp, aaStrs } = condition;

  return (
    <Box sx={{
      width: '100%',
      maxWidth: 1000,
    }}>
      <Box sx={{
        p: 2,
        bgcolor: '#95ca7f',
      }}>
        <FilledInput
          autoFocus
          fullWidth
          hiddenLabel
          size="small"
          color="success"
          value={txt}
          onChange={e => setCondition(prev => ({ ...prev, txt: e.target.value }))}
        />
        <Grid
          container
          spacing={1}
          mt={1}
          position="relative"
          left={16}
        >
          <ConditionItem label="フォント">
            <FontSelect
              value={font}
              onChange={value => setCondition(prev => ({ ...prev, font: value }))}
            />
          </ConditionItem>
          <ConditionItem label="フォントサイズ">
            <SliderInput
              isSlider={isSlider}
              min={20}
              max={400}
              end="px"
              value={fontSize}
              onChange={value => setCondition(prev => ({ ...prev, fontSize: value }))}
            />
          </ConditionItem>
          <ConditionItem label="AAフォント">
            <FontSelect
              value={aaFont}
              onChange={value => setCondition(prev => ({ ...prev, aaFont: value }))}
            />
          </ConditionItem>
          <ConditionItem label="AA文字数（縦）">
            <SliderInput
              isSlider={isSlider}
              min={8}
              max={80}
              end="字"
              value={numy}
              onChange={value => setCondition(prev => ({ ...prev, numy: value }))}
            />
          </ConditionItem>
          <ConditionItem label="色">
            <ColorPicker
              color={color}
              onAccept={c => setCondition(prev => ({ ...prev, color: c }))}
            />
          </ConditionItem>
          <ConditionItem label="AAフォント倍率">
            <SliderInput
              isSlider={isSlider}
              min={0.5}
              max={4}
              step={0.1}
              end="倍"
              value={exp}
              onChange={value => setCondition(prev => ({ ...prev, exp: value }))}
            />
          </ConditionItem>
          <ConditionItem
            label="AA使用文字"
            xs={12}
          >
            <AaStrsInput
              value={aaStrs}
              onChange={value => setCondition(prev => ({ ...prev, aaStrs: value }))}
              sx={{ mr: 2.5 }}
            />
            <ToggleInputType
              isSlider={isSlider}
              onClick={() => setIsSlider(prev => !prev)}
            />
          </ConditionItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default ConditionsArea;
