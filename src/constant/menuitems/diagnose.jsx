import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import MainCard from '../../Template/MainCard';

const variants = ['h1','h2','h3', 'h4','h5','h6', 'body1', 'caption'];

function TypographyDemo(props) {
  const { loading = false } = props;

  return (
    <div>
      {variants.map((variant) => (
        <Typography component="div" key={variant} variant={variant}>
          {loading ? <Skeleton sx={{ bgcolor:'green',}}/> : variant}
        </Typography>
      ))}
    </div>
  );
}

TypographyDemo.propTypes = {
  loading: PropTypes.bool,
};

export default function diagnose() {
  return (
    <Box
      mx={10}
      sx={{
        border: "2px solid grey",
        display: "block",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        padding: 2,
        
      }}
    >
      <MainCard
        title="Diagnosis Panel"
        sx={{
          maxWidth: 1900 , // Max width for the card
          width: "170vh", // Make it responsive
          margin: 2, // Center it horizontally if the container is wider than the card
        }}
      >
    <Grid container spacing={8}>
      <Grid item xs>
        <TypographyDemo loading />
      </Grid>
      <Grid item xs>
        <TypographyDemo />
      </Grid>
    </Grid>

    </MainCard>
    </Box>
  );
}