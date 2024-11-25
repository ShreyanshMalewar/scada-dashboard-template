// material-ui
import { styled } from '@mui/material/styles';

// ==============================|| AUTHENTICATION  WRAPPER ||============================== //

const Authwrap = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  minHeight: '100vh'
}));

export default Authwrap;
