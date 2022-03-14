import { FC, ReactNode } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

type Props = {
  label: string;
  xs?: number;
  pr?: number;
  children?: ReactNode;
};

const ConditionItem: FC<Props> = ({ label, xs = 6, pr = 4, children }) => (
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
      xs={xs - 2}
      display="flex"
      alignItems="center"
      sx={{ pr }}
    >
      {children}
    </Grid>
  </>
);

export default ConditionItem;
