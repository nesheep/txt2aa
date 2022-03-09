import { FC, ReactNode } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

type Props = {
  label: string;
  children: ReactNode;
};

const ConditionItem: FC<Props> = ({ label, children }) => (
  <>
    <Grid
      item
      xs={2}
      display="flex"
      alignItems="center"
    >
      <Typography variant="subtitle1">
        {label}
      </Typography>
    </Grid>
    <Grid
      item
      xs={4}
      display="flex"
      alignItems="center"
      sx={{pr: 4}}
    >
      {children}
    </Grid>
  </>
);

export default ConditionItem;